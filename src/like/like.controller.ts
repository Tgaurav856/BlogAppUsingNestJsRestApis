import { Controller, Get, Param, Post } from "@nestjs/common";
import { likeService } from "./like.services";


@Controller('like')

export class likeController{



    constructor(private likeService:likeService){}

    @Post(':commentId/:userId')
    createLike(
              @Param('userId')userId:number,
            @Param('commentId') commentId:number){
return this.likeService.createLikeonComment(+userId,+commentId)
    }

    @Post(':blogId/:userId')
    createLikeOnBlog(
              @Param('userId')userId:number,
            @Param('blogId') blogId:number){
return this.likeService.createLikeonComment(+userId,+blogId)
    }
   

    @Get(':blogId')
    findLikes(@Param('blogId') blogId:number){
        return this.likeService.findLikes(+blogId)
    }
}