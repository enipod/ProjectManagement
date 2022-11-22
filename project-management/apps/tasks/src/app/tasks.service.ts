import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getData(): { message: string } {
    return { message: 'Welcome to Tasks Module!' };
  }
}
