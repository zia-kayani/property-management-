import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  @IsNotEmpty()
  readonly unit_name: string;

  @IsString()
  @IsNotEmpty()
  readonly unit_location: string;
}
