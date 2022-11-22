import { Test } from '@nestjs/testing';

import { NotificationsService } from './notifications.service';

describe('AppService', () => {
  let service: NotificationsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();

    service = app.get<NotificationsService>(NotificationsService);
  });

  describe('getData', () => {
    it('should return "Welcome to project-management!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to project-management!',
      });
    });
  });
});
