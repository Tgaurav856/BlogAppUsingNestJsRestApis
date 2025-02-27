import { Controller, Post, Body, Get, Request, UseGuards } from "@nestjs/common";
import {  authService } from "./auth.service";
import { loginUserDto } from "src/dtos/user.dto";
import { AuthGuard } from "@nestjs/passport";
import { localGuard } from "./auth.localguard";
import { JwtAuthGuard } from "./guard";








@Controller('auth')

export class authController {

    constructor(private auth: authService) { }

    @Post('login')
    @UseGuards(localGuard)
    async loginAuthor(@Body() dto: loginUserDto) {

        const user = await this.auth.validateAuthor(dto.email, dto.password)
        if (!user) {
            throw { message: "author not found" }
        }
        return this.auth.login(user)
    }

    @Post('login/user')
    @UseGuards()
    async loginUser(@Body()dto:loginUserDto){
        const users=await this.auth.validateUser(dto.email,dto.password)
        if(!users){
            throw{message:"user not found"}
        }

        return this.auth.loginAsUser(users)
    }
   



   @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}