import { Body, Controller, Post,ValidationPipe,Get, Param, Delete } from "@nestjs/common";
import { createUserDto } from "src/dtos/user.dto";
import { userService } from "./user.service";


@Controller('users')

export class userController{

    constructor(private userService:userService){}

@Post('user')

createUser(@Body(new ValidationPipe()) dto:createUserDto){
    return this.userService.createUser(dto);
}

@Get('alluser')
findUser(){
    return this.userService.findUser()
}
@Get(':email')
findByEmail(@Param('email') email:string){
return this.userService.findByEmail(email)

}

@Delete(':id')
removeUser(@Param('id') id:number){
    return this.userService.removeUser(+id)
}
}
