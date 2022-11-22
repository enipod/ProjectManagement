import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  getData(): { message: string } {
    return { message: 'Welcome to Accounts Module!' };
  }
}
