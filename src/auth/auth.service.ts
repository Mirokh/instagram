import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInterface } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<UserInterface> {
  const user = await this.userService.findOneByEmail(email);
  if (user && user.password === pass) {
    const { password, ...result } = user;
    return result as UserInterface;
  }
  return null;
  }

  async login(user: LoginDTO) {
    const exist = await this.validateUser(user.email, user.password);
    if(!exist) {
      throw new BadRequestException({message: 'Wrong credentials!'})
    }
    const payload = { email: exist.email, id: exist.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
