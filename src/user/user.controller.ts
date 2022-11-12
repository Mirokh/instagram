import { Controller, Get, Param } from '@nestjs/common';
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
}
