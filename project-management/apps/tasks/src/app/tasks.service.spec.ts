import { Test } from '@nestjs/testing';

import { TasksService } from './tasks.service';

describe('AppService', () => {
  let service: TasksService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = app.get<TasksService>(TasksService);
  });

  describe('getData', () => {
    it('should return "Welcome to Tasks Module!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to Tasks Module!',
      });
    });
  });
});
