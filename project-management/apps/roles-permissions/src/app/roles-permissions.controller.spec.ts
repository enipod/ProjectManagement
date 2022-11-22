import { Test, TestingModule } from '@nestjs/testing';

import { RolesPermissionsController } from './roles-permissions.controller';
import { RolesPermissionsService } from './roles-permissions.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RolesPermissionsController],
      providers: [RolesPermissionsService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to Roles & Permissions Module!"', () => {
      const appController = app.get<RolesPermissionsController>(RolesPermissionsController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to Roles & Permissions Module!',
      });
    });
  });
});
