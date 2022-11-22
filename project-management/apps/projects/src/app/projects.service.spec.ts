import { Test } from '@nestjs/testing';

import { ProjectsService } from './projects.service';

describe('AppService', () => {
  let service: ProjectsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = app.get<ProjectsService>(ProjectsService);
  });

  describe('getData', () => {
    it('should return "Welcome to project-management!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to project-management!',
      });
    });
  });
});
