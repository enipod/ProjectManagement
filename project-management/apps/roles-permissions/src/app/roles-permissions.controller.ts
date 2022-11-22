import { Controller, Get } from '@nestjs/common';

import { RolesPermissionsService } from './roles-permissions.service'

@Controller()
export class RolesPermissionsController {
  constructor(private readonly rolesPermissionsService: RolesPermissionsService) {}

  @Get()
  getData() {
    return this.rolesPermissionsService.getData();
  }
}
