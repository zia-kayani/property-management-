import { Module } from '@nestjs/common';
import { LoginCredentialsService } from './login-credentials.service';
import { LoginCredentialsController } from './login-credentials.controller';

@Module({
  controllers: [LoginCredentialsController],
  providers: [LoginCredentialsService],
})
export class LoginCredentialsModule {}
