import { Controller, Get } from '@nestjs/common';

import { ProjectsService } from './projects.service';

import { ApiResponse } from '../../../../libs/apiResponse';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getData() {
    return this.projectsService.getData();
  }
}
