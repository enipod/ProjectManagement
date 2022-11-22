import { Module } from '@nestjs/common';

import { AccountController } from './accounts.controller';
import { AccountService } from './accounts.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
