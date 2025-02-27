import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { userService } from "./user.service";
import { prismaService } from "src/prisma/prima.service";



@Module({
    imports:[],
    providers:[userService,prismaService],
    controllers:[userController]
})

export class userModule{}