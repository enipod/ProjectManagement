import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import connection from '../../../../libs/connection';
import { ApiResponse } from '../../../../libs/apiResponse';
import { Account } from '../entities';
import { ObjectId } from 'mongodb';
@Injectable()
export class AccountService {
  private connection: DataSource;

  constructor() {
    this.connection = connection;
  }

  async getAccount(id: string) {
    const results = await this.connection.manager.findOne(Account, {
      where: { _id: new ObjectId(id) as unknown as string },
    });

    return new ApiResponse(true, results);
  }

  async getAccounts() {
    const results = await this.connection.getMongoRepository(Account).find();

    return new ApiResponse(true, results);
  }

  async addAccount(body: Account) {
    const account = new Account(
      body.first_name,
      body.last_name,
      body.email,
      body.type
    );

    const result = await this.connection.manager.save(account);
    return new ApiResponse(true, result);
  }

  async deleteAccount(id: ObjectId) {
    const data = await this.connection.getMongoRepository(Account).deleteOne({
      _id: new ObjectId(id),
    });

    return new ApiResponse(true, data);
  }

  async updateAccount(id: ObjectId, args: Account) {
    const result = await this.connection.manager.update(
      Account,
      { _id: new ObjectId(id) },
      {
        ...args,
      }
    );

    return new ApiResponse(true, result);
  }
}
