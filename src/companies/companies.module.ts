import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/companies.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
