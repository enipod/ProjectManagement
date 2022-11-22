import { Controller, Get } from '@nestjs/common';

import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getData() {
    return this.tasksService.getData();
  }
}
