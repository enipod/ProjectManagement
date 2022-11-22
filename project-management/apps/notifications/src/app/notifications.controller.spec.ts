import { Test, TestingModule } from '@nestjs/testing';

import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Notifications Module!"', () => {
      const appController = app.get<NotificationsController>(NotificationsController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Notifications Module!',
      });
    });
  });
});
