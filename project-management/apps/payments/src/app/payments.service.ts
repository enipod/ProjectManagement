import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getData(): { message: string } {
    return { message: 'Welcome to Payments Module!' };
  }
}
