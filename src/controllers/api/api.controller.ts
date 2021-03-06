import { Controller, Get } from '@nestjs/common';
import { ApiService } from '../../services/api/api.service';

@Controller('api')
export class ApiController {

  constructor(
    private readonly apiService: ApiService
  ) {}

  @Get('transactionInfo')
  getTransactionInfoById() {
    return this.apiService.getTransactionInfoById();
  }
}
