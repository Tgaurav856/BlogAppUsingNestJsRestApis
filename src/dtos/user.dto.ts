
import { IsEmail, IsString } from "class-validator";
export class createUserDto{

    @IsString()
    
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    password:string
}

export class loginUserDto{

    email:string;
    password:string;
}


