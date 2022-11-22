import { Test } from '@nestjs/testing';

import { RolesPermissionsService } from './roles-permissions.service';

describe('AppService', () => {
  let service: RolesPermissionsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [RolesPermissionsService],
    }).compile();

    service = app.get<RolesPermissionsService>(RolesPermissionsService);
  });

  describe('getData', () => {
    it('should return "Welcome to Roles & Permissions Module!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to Roles & Permissions Module!',
      });
    });
  });
});
