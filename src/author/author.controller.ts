import { Body, Controller, Get, NotFoundException, Param, Post,ValidationPipe } from "@nestjs/common";
import { authorSerrvice } from "./author.service";
import { createAuthorDto } from "src/dtos/author.dto";

@Controller('authors')


export class authorController{

constructor(private authorService:authorSerrvice){}

@Post('author')
createAuthor(@Body(new ValidationPipe()) dto:createAuthorDto){
    return this.authorService.createAuthor(dto)
}

@Get('allauther')
find(){
    return this.authorService.findAuther()
}

@Get(':id')
async findOne(@Param('id') id:number){

   const auther= await this.authorService.findById(+id)
   if(!auther){
    throw new NotFoundException("auther not found")
   }
   return auther
}


@Get(':email')
findByEmail(@Param('email') email:string){
    return this.authorService.findEmail(email)
}
}