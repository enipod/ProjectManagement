import { Test } from '@nestjs/testing';

import { AccountService } from './accounts.service';

describe('AppService', () => {
  let service: AccountService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AccountService],
    }).compile();

    service = app.get<AccountService>(AccountService);
  });

  describe('getData', () => {
    it('should return "Welcome to Accounts Module!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to Accounts Module!',
      });
    });
  });
});
