import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { UnitCompanyService } from 'src/unit-company-services/entities/unit-company-services.entity';
import { LoginCredentials } from 'src/login-credentials/entities/login-credentials.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_name: string;

  @Column()
  service_type: string;

  @Column()
  contact_number: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => LoginCredentials, (loginCredentials) => loginCredentials.company)
  loginCredentials: LoginCredentials[];

  @OneToMany(() => UnitCompanyService, (unitCompanyService) => unitCompanyService.company)
  unitCompanyServices: UnitCompanyService[];
}
