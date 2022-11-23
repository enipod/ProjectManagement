import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../../../../libs/apiResponse';
import { DataSource } from 'typeorm';
import { Project } from '../entities';
import connectDB from '../../../../libs/connection';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProjectsService {
  private connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  async getProjects() {
    const results = await this.connection.getMongoRepository(Project).find();

    return new ApiResponse(true, results);
  }

  async addProject(body: Project) {
    const project = new Project(body.name, body.description, body.ownerId);

    const result = await this.connection.manager.save(project);

    return new ApiResponse(true, result);
  }

  async deleteProject(id: ObjectId) {
    const data = await this.connection.getMongoRepository(Project).deleteOne({
      _id: new ObjectId(id),
    });

    return new ApiResponse(true, data);
  }
}
