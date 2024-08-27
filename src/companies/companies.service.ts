import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/companies.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectRepository(Company) private readonly companyRepository: Repository<Company>){}

    //create single company 
    async create(createCompanyDto : CreateCompanyDto ) : Promise<Company> {
        const company =  this.companyRepository.create(createCompanyDto);
        return this.companyRepository.save(company);
    }

    //find all companies
    async findAll(): Promise<Company[]> {
        return this.companyRepository.find();
    }

    //find one company
    async findOne(id: string): Promise<Company> {
        const company = await this.companyRepository.findOne({ where: { id } });
        if (!company) {
          throw new NotFoundException(`Company with ID "${id}" not found`);
        }
        return company;
      }

      //update company
      async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
       const company =  await this.findOne(id); // Ensure the company exists
       if(!company){
        throw new NotFoundException(`Company with ID "${id}" not found`);
       }
        await this.companyRepository.update(id, updateCompanyDto);
        return this.findOne(id);
      }
    
      
    //remove company
    async remove(id: string): Promise<void> {
        const result = await this.companyRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Company with ID "${id}" not found`);
        }
      }

}
