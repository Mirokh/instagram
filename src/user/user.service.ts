import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserInterface } from './user.interface';
import { userMock } from './user.mock';

@Injectable()
export class UserService {
    public findAll() {
        return userMock;
    }

    public findOne(id) {
        return userMock.find((user) => user.id === Number(id))
    }

    public create(user: CreateUserDto){
        const createdUser: UserInterface = {id: userMock.length + 1, firstname: user.firstname, lastname: user.lastname, age: user.age || null, email: user.email, phoneNumber: user.phoneNumber}
        userMock.push(createdUser);
        return user;
    }
}
