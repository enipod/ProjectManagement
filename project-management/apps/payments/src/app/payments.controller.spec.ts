import { Test, TestingModule } from '@nestjs/testing';

import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [PaymentsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Payments Module!"', () => {
      const appController = app.get<PaymentsController>(PaymentsController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Payments Module!',
      });
    });
  });
});
