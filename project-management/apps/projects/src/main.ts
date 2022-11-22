/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ProjectsModule } from './app/projects.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectsModule);
  const globalPrefix = 'projects';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3334;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
