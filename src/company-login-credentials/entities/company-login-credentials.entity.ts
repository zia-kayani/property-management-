import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Company } from 'src/companies/entities/companies.entity';
import { Unit } from 'src/units/entities/units.entity';

@Entity()
export class CompanyLoginCredentials {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @ManyToOne(() => Company, company => company.loginCredentials)
    company: Company;

    @OneToOne(() => Unit, { nullable: true })
    @JoinColumn()
    unit: Unit;  // Ensures each set of credentials is linked to only one unit
}
