import {
  IsEmail,
  IsMobilePhone,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsString()
  @Length(3, 20)
  @IsOptional()
  firstname?: string;

  @IsString()
  @Length(3, 20)
  @IsOptional()
  lastname?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  age?: number;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsMobilePhone('en-US')
  @IsOptional()
  phoneNumber?: string;
  
  @IsString()
  @Length(6, 20)
  password: string
}
