import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Company } from 'src/companies/entities/companies.entity';

@Entity()
export class CompanyLoginCredentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (company) => company.loginCredentials)
  company: Company;

  @Column()
  username: string;

  @Column()
  password: string;
}
