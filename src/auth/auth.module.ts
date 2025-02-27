import { Module } from "@nestjs/common";
import { userModule } from "src/user/user.module";
import { authController } from "./auth.controller";
import {  authService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import * as dotenv from 'dotenv'

import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { prismaService } from "src/prisma/prima.service";
import { prismaModule } from "src/prisma/prisma.module";
import { userService } from "src/user/user.service";
import { localStrategy } from "./local.strategy";
import { jwtStrategy } from "./passport strategy";
import { authorSerrvice } from "src/author/author.service";


dotenv.config()

@Module({

    imports:[userModule,PassportModule,prismaModule],
    controllers:[authController],
    providers:[authService,prismaService,userService,JwtService,localStrategy,jwtStrategy,authorSerrvice],
    exports:[authService]
})


export class authModule{}