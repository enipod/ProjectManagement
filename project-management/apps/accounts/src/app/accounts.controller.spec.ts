import { Test, TestingModule } from '@nestjs/testing';

import { AccountController } from './accounts.controller';
import { AccountService } from './accounts.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AccountService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Accounts Module!"', () => {
      const appController = app.get<AccountController>(AccountController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Accounts Module!',
      });
    });
  });
});
