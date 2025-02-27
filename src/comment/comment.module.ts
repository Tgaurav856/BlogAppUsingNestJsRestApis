import { Module } from "@nestjs/common";
import { commentService } from "./comment.service";
import { CommentController } from "./comment.controller";



@Module({
    imports:[],
    providers:[commentService],
    controllers:[CommentController]

})
export class commentModule{}