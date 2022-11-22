import { Test, TestingModule } from '@nestjs/testing';

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Projects Module!"', () => {
      const appController = app.get<ProjectsController>(ProjectsController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Projects Module!',
      });
    });
  });
});
