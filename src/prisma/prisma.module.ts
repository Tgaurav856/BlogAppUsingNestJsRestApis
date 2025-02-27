import { Module } from "@nestjs/common";
import { prismaService } from "./prima.service";



@Module({
    imports:[],
    providers:[prismaService],
    exports:[prismaModule]
})
export class prismaModule{}