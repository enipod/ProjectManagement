import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  getData(): { message: string } {
    return { message: 'Welcome to Notifications Module!' };
  }
}
