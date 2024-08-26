import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Unit } from '../../units/entities/units.entity';
import { Company } from '../../companies/entities/companies.entity';

@Entity()
export class UnitCompanyService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Unit, (unit) => unit.unitCompanyServices)
  unit: Unit;

  @ManyToOne(() => Company, (company) => company.unitCompanyServices)
  company: Company;

  @Column({ default: 1 })
  service_count: number;

  @CreateDateColumn()
  last_service_date: Date;
}
