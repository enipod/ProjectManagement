import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Account } from '../entities';

import { AccountService } from './accounts.service';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async getAccounts() {
    return await this.accountService.getAccounts();
  }

  @Post()
  async addAccount(@Body() body: Account) {
    return await this.accountService.addAccount(body);
  }

  @Delete('/:id')
  async deleteAccount(@Param('id') id: ObjectId) {
    return await this.accountService.deleteAccount(id);
  }
}
