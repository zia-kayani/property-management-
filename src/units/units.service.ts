import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit } from './entities/units.entity';
import { Repository } from 'typeorm';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {

    constructor(@InjectRepository(Unit) private readonly unitRepository: Repository<Unit>) { }

    // Create a new unit
    async create(createUnitDto: CreateUnitDto): Promise<Unit> {
        const unit = this.unitRepository.create(createUnitDto);
        return this.unitRepository.save(unit);
    }

    // Get all units
    async findAll(): Promise<Unit[]> {
        return this.unitRepository.find();
    }

    //finding one unit
    async findOne(id: string): Promise<Unit> {
        return this.unitRepository.findOneBy({id});
    }

    // Update a unit by ID
    async update(id: string, updateUnitDto: UpdateUnitDto): Promise<Unit> {
        await this.unitRepository.update(id, updateUnitDto);
        return this.unitRepository.findOneBy({id});
    }

    // Delete a unit by ID
    async remove(id: string): Promise<void> {
        await this.unitRepository.delete(id);
    }
}
