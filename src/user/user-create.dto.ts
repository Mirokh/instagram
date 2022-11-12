import { userMock } from "./user.mock"

export class CreateUserDto{
    // id = userMock.length + 1
    id: number
    firstname: string
    lastname: string
    age?: number
    email: string
    phoneNumber: string
}