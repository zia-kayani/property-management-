import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { CreateCompanyLoginCredentialsDto } from './dto/company-login-credentials.dto';
import { CompanyLoginCredentialsService } from './company-login-credentials.service';
import { CompanyLoginCredentials } from './entities/company-login-credentials.entity';

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

  @Get()
  async findAll() : Promise<CompanyLoginCredentials[]> {
    return this.companyLoginCredentialsService.findAll()
  }


}
