import { Controller, Post, Param, Body } from '@nestjs/common';
import { CreateCompanyLoginCredentialsDto } from './dto/company-login-credentials.dto';
import { CompanyLoginCredentialsService } from './company-login-credentials.service';

@Controller('company-login-credentials')
export class CompanyLoginCredentialsController {
  constructor(private readonly companyLoginCredentialsService: CompanyLoginCredentialsService) {}

  @Post(':companyId')
  async create(
    @Param('companyId') companyId: string,
    @Body() createCompanyLoginCredentialsDto: CreateCompanyLoginCredentialsDto,
  ) {
    return this.companyLoginCredentialsService.create(companyId, createCompanyLoginCredentialsDto);
  }
}
