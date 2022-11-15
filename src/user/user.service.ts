import { Injectable } from '@nestjs/common';
import { userMock } from './user.mock';

@Injectable()
export class UserService {
    public findAll() {
        return userMock;
    }

    public findOne(id) {
        return userMock.find((user) => user.id === id)
    }

    public findAndDelete(id) {
        const indexOfUser = userMock.map(e => e.id).indexOf(id);

        return userMock.splice(indexOfUser, 1);
    }
}
