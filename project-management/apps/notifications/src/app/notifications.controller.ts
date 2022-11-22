import { Controller, Get } from '@nestjs/common';

import { NotificationsService } from './notifications.service'

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  getData() {
    return this.notificationsService.getData();
  }
}
