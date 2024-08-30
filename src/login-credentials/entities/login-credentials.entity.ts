import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { CompanyLoginCredentials } from 'src/company-login-credentials/entities/company-login-credentials.entity';
import { Unit } from 'src/units/entities/units.entity';
import { Company } from 'src/companies/entities/companies.entity';

export enum PaymentStatus {
  PENDING = 'pending',
  DONE = 'done',
}


@Entity()
export class LoginCredentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (company) => company.loginCredentials, {eager:true})
  company: Company;

  @ManyToOne(() => Unit, (unit) => unit.loginCredentials, { eager: true })
  unit: Unit;

  @ManyToOne(() => CompanyLoginCredentials, (companyLoginCredentials) => companyLoginCredentials.id , { eager: true })
  companyLoginCredential: CompanyLoginCredentials;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  payment_status: PaymentStatus;

  @CreateDateColumn()
  created_at: Date;
}


