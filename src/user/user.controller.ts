import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    public getAll() {
        return this.userService.findAll();
    }
    
    @Get(':id')
    public findById(@Param('id', ParseIntPipe)id: number) {
        return this.userService.findOne(id);
    }

    @Delete(':id')
    public deleteUser(@Param('id', ParseIntPipe)id: number) {
        this.userService.findAndDelete(id);
        return `user with id ${id} deleted`
    }
}
