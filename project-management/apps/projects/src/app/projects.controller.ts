import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Project } from '../entities';

import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/:id')
  async getAccount(@Param('id') id: string) {
    return await this.projectsService.getProject(id);
  }

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

  @Patch('/:id')
  async updateAccount(@Param('id') id: ObjectId, @Body() body: Project) {
    return await this.projectsService.updateProject(id, body);
  }
}
