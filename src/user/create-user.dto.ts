import {
  IsEmail,
  IsMobilePhone,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from '@nestjs/class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  firstname: string;

  @IsString()
  @Length(3, 20)
  lastname: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  age?: number;

  @IsString()
  @IsEmail()
  email: string;

  @IsMobilePhone('en-US')
  phoneNumber: string;

  @IsString()
  @Length(6, 20)
  password: string
}
