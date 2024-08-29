import { Module } from '@nestjs/common';
import { CompanyLoginCredentialsService } from './company-login-credentials.service';
import { CompanyLoginCredentialsController } from './company-login-credentials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyLoginCredentials } from './entities/company-login-credentials.entity';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports:[TypeOrmModule.forFeature([CompanyLoginCredentials]), CompaniesModule ],
  controllers: [CompanyLoginCredentialsController],
  providers: [CompanyLoginCredentialsService],
  exports:[CompanyLoginCredentialsService , CompaniesModule , TypeOrmModule]
})
export class CompanyLoginCredentialsModule {}
