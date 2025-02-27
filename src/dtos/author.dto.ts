import { IsEmail, IsString } from "class-validator";



export class createAuthorDto{
     @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string
}