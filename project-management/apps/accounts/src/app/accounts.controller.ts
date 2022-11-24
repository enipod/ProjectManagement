import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Account } from '../entities';

import { AccountService } from './accounts.service';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('/:id')
  async getAccount(@Param('id') id: string) {
    return await this.accountService.getAccount(id);
  }

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

  @Patch('/:id')
  async updateAccount(@Param('id') id: ObjectId, @Body() body: Account) {
    return await this.accountService.updateAccount(id, body);
  }
}
