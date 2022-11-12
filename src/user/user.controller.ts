import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    public getAll() {
        return this.userService.findAll();
    }
<<<<<<< HEAD
    
    @Get(':id')
    public findById(@Param('id')id: string) {
        return this.userService.findOne(id);
    }
=======
>>>>>>> dev
}
