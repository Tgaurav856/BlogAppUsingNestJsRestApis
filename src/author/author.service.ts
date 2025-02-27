import { Injectable } from "@nestjs/common";
import { createAuthorDto } from "src/dtos/author.dto";
import { prismaService } from "src/prisma/prima.service";
import * as bcrypt from "bcryptjs"


@Injectable()

export class authorSerrvice{
constructor(private prisma:prismaService){}

async createAuthor(authorDto:createAuthorDto){
    const hashedPassword=await bcrypt.hash(authorDto.password,10);
    return this.prisma.author.create({
        data:{...authorDto,password:hashedPassword}
    })
}

findAuther(){
    return this.prisma.author.findMany()
}

findById(id:number){
    return this.prisma.author.findUnique({where:{id}})
}

 findEmail(email:string){
    return this.prisma.author.findUnique({where:{email}})
}



}