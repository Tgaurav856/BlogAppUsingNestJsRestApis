import { Injectable,UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import {  authService } from "./auth.service";


@Injectable()

export class localStrategy extends PassportStrategy(Strategy){

    constructor(private authService:authService){
        super({ usernameField: 'email', passwordField: 'password' }
            
        )
         
    }
    async validate(email:string,password:string):Promise<any>{
        
        
        const user=await this.authService.validateAuthor(email,password);
        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }
    

}


@Injectable()

export class localAuthStrategy extends PassportStrategy(Strategy,'user'){

    constructor(private authService:authService){
        super({usernameField:"email"})
    }

    async validate(email:string,password:string):Promise<any>{
        const user=await this.authService.validateUser(email,password);
        if(!user){
            throw new UnauthorizedException()
        }
        throw user
    }
}
