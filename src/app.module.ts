import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// for db connection 
import { DatabaseModule } from './database/database.module';
import { UnitsModule } from './units/units.module';
import { CompaniesModule } from './companies/companies.module';
import { LoginCredentialsModule } from './login-credentials/login-credentials.module';
import { UnitCompanyServicesModule } from './unit-company-services/unit-company-services.module';


@Module({
  imports: [
   DatabaseModule,
   UnitsModule,
   CompaniesModule,
   LoginCredentialsModule,
   UnitCompanyServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
