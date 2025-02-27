import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()


export class prismaService extends PrismaClient implements OnModuleInit{
 
    onModuleInit() {
        this.$connect()
        .then(()=>console.log("db connected"))
        .catch((err)=>console.log(err))
    }


}