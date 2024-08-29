import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from './entities/units.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Unit])],
  controllers: [UnitsController],
  providers: [UnitsService],
  exports:[UnitsService , TypeOrmModule]
})

export class UnitsModule {}
