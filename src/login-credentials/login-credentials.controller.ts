import { Controller } from '@nestjs/common';
import { LoginCredentialsService } from './login-credentials.service';

@Controller('login-credentials')
export class LoginCredentialsController {
  constructor(private readonly loginCredentialsService: LoginCredentialsService) {}
}
