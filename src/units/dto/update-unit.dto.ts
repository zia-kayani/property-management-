import { IsString, IsOptional } from 'class-validator';

export class UpdateUnitDto {
  @IsString()
  @IsOptional()
  readonly unit_name?: string;

  @IsString()
  @IsOptional()
  readonly unit_location?: string;
}
