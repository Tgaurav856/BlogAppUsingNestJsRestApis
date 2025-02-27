

import { Module } from "@nestjs/common";
import { authorController } from "./author.controller";
import { authorSerrvice } from "./author.service";
import { prismaService } from "src/prisma/prima.service";



@Module({
    imports:[],
    providers:[authorSerrvice,prismaService],
    controllers:[authorController],
    exports:[authorModule]
})

export class authorModule{}