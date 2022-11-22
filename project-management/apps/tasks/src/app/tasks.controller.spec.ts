import { Test, TestingModule } from '@nestjs/testing';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Tasks Module!"', () => {
      const appController = app.get<TasksController>(TasksController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Tasks Module!',
      });
    });
  });
});
