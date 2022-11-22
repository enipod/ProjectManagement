import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesPermissionsService {
  getData(): { message: string } {
    return { message: 'Welcome to Roles & Permissions Module!' };
  }
}
