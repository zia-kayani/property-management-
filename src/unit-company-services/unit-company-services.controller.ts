import { Controller } from '@nestjs/common';
import { UnitCompanyServicesService } from './unit-company-services.service';

@Controller('unit-company-services')
export class UnitCompanyServicesController {
  constructor(private readonly unitCompanyServicesService: UnitCompanyServicesService) {}
}
