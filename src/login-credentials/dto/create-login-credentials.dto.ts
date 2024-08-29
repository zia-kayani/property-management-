import { IsUUID, IsString } from 'class-validator';
import { PaymentStatus } from '../entities/login-credentials.entity';


export class CreateLoginCredentialsDto {
  @IsUUID()
  company_id: string;

  @IsUUID()
  unit_id: string;

  @IsString()
  payment_status: PaymentStatus;
}
