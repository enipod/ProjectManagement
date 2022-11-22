import { Test } from '@nestjs/testing';

import { AccountService } from './tasks.service';

describe('AppService', () => {
  let service: AccountService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AccountService],
    }).compile();

    service = app.get<AccountService>(AccountService);
  });

  describe('getData', () => {
    it('should return "Welcome to project-management!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to project-management!',
      });
    });
  });
});
