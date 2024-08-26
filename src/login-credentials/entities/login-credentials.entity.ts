import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

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

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Unit, (unit) => unit.loginCredentials)
  unit: Unit;

  @ManyToOne(() => Company, (company) => company.loginCredentials)
  company: Company;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  payment_status: PaymentStatus;

  @CreateDateColumn()
  created_at: Date;
}
