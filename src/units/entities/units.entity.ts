import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { UnitCompanyService } from '../../unit-company-services/entities/unit-company-services.entity';
import { LoginCredentials } from 'src/login-credentials/entities/login-credentials.entity';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  unit_name: string;

  @Column()
  unit_location: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => LoginCredentials, (loginCredentials) => loginCredentials.unit)
  loginCredentials: LoginCredentials[];

  @OneToMany(() => UnitCompanyService, (unitCompanyService) => unitCompanyService.unit)
  unitCompanyServices: UnitCompanyService[];
}
