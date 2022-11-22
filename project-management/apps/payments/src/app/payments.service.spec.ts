import { Test } from '@nestjs/testing';

import { PaymentsService } from './payments.service';

describe('AppService', () => {
  let service: PaymentsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PaymentsService],
    }).compile();

    service = app.get<PaymentsService>(PaymentsService);
  });

  describe('getData', () => {
    it('should return "Welcome to project-management!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to project-management!',
      });
    });
  });
});
