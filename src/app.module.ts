import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// for db connection 
import { UnitsModule } from './units/units.module';
import { CompaniesModule } from './companies/companies.module';
import { LoginCredentialsModule } from './login-credentials/login-credentials.module';
import { UnitCompanyServicesModule } from './unit-company-services/unit-company-services.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyLoginCredentialsModule } from './company-login-credentials/company-login-credentials.module';


@Module({
  imports: [


    //DATABASE CONNECTIVITY 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".local.env",
        // envFilePath: ".prod.env",
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),


    UnitsModule,
    CompaniesModule,
    LoginCredentialsModule,
    UnitCompanyServicesModule,
    CompanyLoginCredentialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
