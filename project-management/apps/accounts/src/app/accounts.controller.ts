import { Controller, Get } from '@nestjs/common';

import { AccountService } from './accounts.service'

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getData() {
    return this.accountService.getData();
  }
}
