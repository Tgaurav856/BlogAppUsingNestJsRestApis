import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { loginUserDto } from "src/dtos/user.dto";
import { prismaService } from "src/prisma/prima.service";
import { userService } from "src/user/user.service";
import * as bcrypt from 'bcryptjs'
import { authorSerrvice } from "src/author/author.service";
import { access } from "fs";



@Injectable()

export class authService{


    constructor(private authorService:authorSerrvice,private jwt:JwtService, private userService:userService){}

    async validateAuthor(email:string,password:string):Promise<any>{
        

        const user=await this.authorService.findEmail(email)
        if(user &&( await bcrypt.compare(password,user.password))){
            return user
        }
        return null
    }

    async validateUser(email:string,password:string):Promise<any>{

        const users=await this.userService.findByEmail(email)
        if(users && (await bcrypt.compare(password,users.password))){
            return users
        }
        return null
    }


    async login(user:any){
        const payload={email:user.email,id:user.id}
        console.log(user.id)
        const token=this.jwt.sign(payload, {secret: 'gaurav'})
      
    
        return{
            access_token:token
        
        }
    }

    async loginAsUser(users:any){
        const payload={email:users.email,id:users.id}
        console.log(users.id)
        const token=this.jwt.sign(payload,{secret:'thakre'})

        return{
            access_token:token
        }
    }



}





