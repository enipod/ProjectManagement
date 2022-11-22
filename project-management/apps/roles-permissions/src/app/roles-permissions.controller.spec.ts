import { Test, TestingModule } from '@nestjs/testing';

import { AccountController } from './roles-permissions.controller';
import { AccountService } from './roles-permissions.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AccountService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to project-management!"', () => {
      const appController = app.get<AccountController>(AccountController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to project-management!',
      });
    });
  });
});
