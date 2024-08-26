import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { Unit } from './entities/units.entity';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  async create(@Body() createUnitDto:CreateUnitDto): Promise<Unit>{
    return this.unitsService.create(createUnitDto)
  }

   // Get all units
   @Get()
   async findAll(): Promise<Unit[]> {
     return this.unitsService.findAll();
   }

     // Get a unit by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Unit> {
    return this.unitsService.findOne(id);
  }

   // Update a unit by ID
   @Put(':id')
   async update(@Param('id') id: string, @Body() updateUnitDto: UpdateUnitDto): Promise<Unit> {
     return this.unitsService.update(id, updateUnitDto);
   }

     // Delete a unit by ID
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.unitsService.remove(id);
  }
}
