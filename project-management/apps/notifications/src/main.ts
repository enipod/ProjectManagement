/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { NotificationsModule } from './app/notifications.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule);
  const port = process.env.PORT || 3334;
  const globalPrefix = 'notifications';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
