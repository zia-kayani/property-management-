import { Module } from '@nestjs/common';
import { UnitCompanyServicesService } from './unit-company-services.service';
import { UnitCompanyServicesController } from './unit-company-services.controller';

@Module({
  controllers: [UnitCompanyServicesController],
  providers: [UnitCompanyServicesService],
})
export class UnitCompanyServicesModule {}
