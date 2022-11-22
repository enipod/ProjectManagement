import { Controller, Get } from '@nestjs/common';

import { PaymentsService } from './payments.service'

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  getData() {
    return this.paymentsService.getData();
  }
}