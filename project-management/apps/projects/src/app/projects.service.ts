import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import connectDB from '../util/connections';
@Injectable()
export class ProjectsService {
  private connection: DataSource;

  constructor() {
    this.connection = connectDB;
  }

  getData(): { message: string } {
    console.log(process.env.MONGO_USERNAME)
    return { message: 'Welcome to Projects Module!' };
  }
}
