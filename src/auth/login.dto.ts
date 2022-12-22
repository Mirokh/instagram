import { IsString, Length } from "@nestjs/class-validator"
import { IsEmail } from "class-validator"

export class LoginDTO {
  @IsEmail()
  email: string

  @IsString()
  @Length(4, 15)
  password: string
}