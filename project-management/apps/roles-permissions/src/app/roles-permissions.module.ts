import { Module } from '@nestjs/common';

import { RolesPermissionsController } from './roles-permissions.controller';
import { RolesPermissionsService } from './roles-permissions.service';

@Module({
  imports: [],
  controllers: [RolesPermissionsController],
  providers: [RolesPermissionsService],
})
export class RolesPermissionsModule {}
