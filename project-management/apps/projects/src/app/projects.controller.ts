import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Project } from '../entities';

import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects() {
    return await this.projectsService.getProjects();
  }

  @Post()
  async addProject(@Body() body: Project) {
    return await this.projectsService.addProject(body);
  }

  @Delete('/:id')
  async deleteProject(@Param('id') id: ObjectId) {
    return await this.projectsService.deleteProject(id);
  }
}
