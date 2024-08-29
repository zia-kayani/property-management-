

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginCredentials } from 'src/login-credentials/entities/login-credentials.entity';
import { CompanyLoginCredentials } from 'src/company-login-credentials/entities/company-login-credentials.entity';
import { Unit } from 'src/units/entities/units.entity';
import { Company } from 'src/companies/entities/companies.entity';
// import { PaymentStatus } from 'src/login-credentials/entities/login-credentials.entity';
import { CreateLoginCredentialsDto } from './dto/create-login-credentials.dto';


@Injectable()
export class LoginCredentialsService {
    constructor(
        @InjectRepository(LoginCredentials)
        private loginCredentialsRepository: Repository<LoginCredentials>,
        
        @InjectRepository(CompanyLoginCredentials)
        private companyLoginCredentialsRepository: Repository<CompanyLoginCredentials>,
        
        @InjectRepository(Unit)
        private unitRepository: Repository<Unit>,
        
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
    ) {}

    async assignLoginCredentials(createLoginCredentialsDto :  CreateLoginCredentialsDto): Promise<string> {
        const {company_id , unit_id , payment_status} = createLoginCredentialsDto;

        // Check if LoginCredentials already exists for the given unitId and companyId
        const existingLoginCredentials = await this.loginCredentialsRepository.findOne({
            where: {
                company: { id: company_id },
                unit: { id: unit_id },
            },
        });

        if (existingLoginCredentials) {
            throw new BadRequestException(`Credentials with ${unit_id} and company id ${company_id} already exist`);
        }

        // Find the company credentials in the CompanyLoginCredentials table that are not assigned to any unit
        const availableCompanyLoginCredential = await this.companyLoginCredentialsRepository.createQueryBuilder('credentials')
        .leftJoinAndSelect('credentials.unit', 'unit')
        .where('credentials.companyId = :companyId', { companyId: company_id }) // Use the property name as defined in the entity
        .andWhere('unit.id IS NULL') // Ensure the credentials are not assigned to any unit
        .getOne();
    

    if (!availableCompanyLoginCredential) {
        throw new NotFoundException('No available company credentials found for this company');
    }


        // Find the Unit and Company entities
    const unit = await this.unitRepository.findOne({ where: { id: unit_id} });
    const company = await this.companyRepository.findOne({ where: { id: company_id } });

    if (!unit || !company) {
        throw new NotFoundException('Unit or Company not found');
    }

    // Create a new LoginCredentials entity
    const newLoginCredentials = this.loginCredentialsRepository.create({
        company: company,
        unit: unit,
        companyLoginCredential: availableCompanyLoginCredential,
        payment_status: payment_status,
    });

   // Assign the credential to the unit
   availableCompanyLoginCredential.unit = unit;
   await this.companyLoginCredentialsRepository.save(availableCompanyLoginCredential);


        // Save the new LoginCredentials entity
        await this.loginCredentialsRepository.save(newLoginCredentials);

        return 'Login credentials assigned successfully';
    }
}
