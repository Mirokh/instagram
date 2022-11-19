import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { UserInterface } from './user.interface';
import { userMock } from './user.mock';

@Injectable()
export class UserService {
  public findAll() {
    return userMock;
  }

  public findOne(id) {
    return userMock.find((user) => user.id === id);
  }

  public findAndDelete(id): void {
    const indexOfUser = userMock.map((e) => e.id).indexOf(id);
    userMock.splice(indexOfUser, 1);
  }

  public create(user: CreateUserDto) {
    const createdUser: UserInterface = {
      id: userMock.length + 1,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age || null,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    userMock.push(createdUser);
    return user;
  }

  public update(user: UpdateUserDto, id: number) {
    const findUser = userMock.find((user) => user.id === id);
    findUser.firstname = user.firstname || findUser.firstname;
    findUser.lastname = user.lastname || findUser.lastname;
    findUser.age = user.age || findUser.age;
    findUser.email = user.email || findUser.email;
    findUser.phoneNumber = user.phoneNumber || findUser.phoneNumber;

    return findUser;
  }
}
