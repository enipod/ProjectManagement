/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { PaymentsModule } from './app/payments.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentsModule);
  const globalPrefix = 'payments';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3335;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
