import { Module } from "@nestjs/common";
import { blogController } from "./blog.controller";
import { blogService } from "./blog.service";
import { prismaService } from "src/prisma/prima.service";
import { JwtService } from "@nestjs/jwt";



@Module({
    imports:[],
    controllers:[blogController],
    providers:[blogService,prismaService,JwtService],
    exports:[blogModule]

})

export class blogModule{}

