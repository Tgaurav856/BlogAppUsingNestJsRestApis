import { Injectable } from "@nestjs/common";
import { createUserDto } from "src/dtos/user.dto";
import { prismaService } from "src/prisma/prima.service";
import * as bcrypt from "bcryptjs"


@Injectable()



export class userService{


    constructor(private prisma:prismaService){}

    async createUser(userDto:createUserDto){
        const hashPassword= await bcrypt.hash(userDto.password,10);
        
        return this.prisma.user.create({
            data:{...userDto,password:hashPassword}
        })

    }

    findUser(){
      
        return this.prisma.user.findMany()
    }
    findByEmail(email:string){
        return this.prisma.user.findUnique({where:{email}})
    }
    removeUser(id:number){
        return this.prisma.user.delete({where:{id}})
    }
}