import { Controller, Post, Body } from '@nestjs/common';
import { LoginCredentialsService } from './login-credentials.service';
import { CreateLoginCredentialsDto } from './dto/create-login-credentials.dto';

@Controller('login-credentials')
export class LoginCredentialsController {
  constructor(private readonly loginCredentialsService: LoginCredentialsService) {}

  @Post()
  async create(@Body() createLoginCredentialsDto: CreateLoginCredentialsDto) :Promise <string> {
    return this.loginCredentialsService.assignLoginCredentials(createLoginCredentialsDto)
  }

  @Post('get-company-details')
  async getCompanyDetails(@Body() body : {username :string , password: string}){
    const {username , password} =  body;
    return this.loginCredentialsService.getCompanyDetialsByCredentials(username , password);
  }
}
