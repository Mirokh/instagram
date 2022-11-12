import { Injectable } from '@nestjs/common';
import { userMock } from './user.mock';

@Injectable()
export class UserService {
    public findAll() {
        return userMock;
    }
}
