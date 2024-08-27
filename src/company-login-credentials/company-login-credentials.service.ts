import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyLoginCredentials } from './entities/company-login-credentials.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/companies/entities/companies.entity';
import { CreateCompanyLoginCredentialsDto } from './dto/company-login-credentials.dto';


@Injectable()
export class CompanyLoginCredentialsService {
    constructor(@InjectRepository(CompanyLoginCredentials)
     private readonly companyLoginCredentialsRepository: Repository<CompanyLoginCredentials> ,
    
     @InjectRepository(Company) private readonly companyRepository : Repository <Company>
    ){}

    async create(companyId : string, createCompanyLoginCredentialsDto : CreateCompanyLoginCredentialsDto) : Promise<CompanyLoginCredentials>{
        const {username , password} = createCompanyLoginCredentialsDto;

        //find company in db id
        const company = await this.companyRepository.findOne({where : {id : companyId}})
        if(!company){
            throw new NotFoundException(`Company with this ${companyId} not found`);
        }

        const companyLoginCredentials = this.companyLoginCredentialsRepository.create({
           company ,  username , password
        })

        return this.companyLoginCredentialsRepository.save(companyLoginCredentials);
    }
}
