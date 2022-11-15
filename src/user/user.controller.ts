import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { userMock } from './user.mock';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    public getAll() {
        return this.userService.findAll();
    }
    
    @Get(':id')
    public findById(@Param('id')id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    public creatUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}
