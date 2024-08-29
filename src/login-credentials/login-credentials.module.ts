import { Module } from '@nestjs/common';
import { LoginCredentialsService } from './login-credentials.service';
import { LoginCredentialsController } from './login-credentials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyLoginCredentialsModule } from 'src/company-login-credentials/company-login-credentials.module';
import { UnitsModule } from 'src/units/units.module';
import { LoginCredentials } from './entities/login-credentials.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LoginCredentials]) , CompanyLoginCredentialsModule , UnitsModule],
  controllers: [LoginCredentialsController],
  providers: [LoginCredentialsService],

})
export class LoginCredentialsModule {}
