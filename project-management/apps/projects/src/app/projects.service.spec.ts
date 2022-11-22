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
    it('should return "Welcome to Projects Module!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to Projects Module!',
      });
    });
  });
});
