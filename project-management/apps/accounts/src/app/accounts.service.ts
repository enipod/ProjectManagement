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
}
