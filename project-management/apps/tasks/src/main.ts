/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { TasksModule } from './app/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  const port = process.env.PORT || 3338;
  const globalPrefix = 'tasks';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
