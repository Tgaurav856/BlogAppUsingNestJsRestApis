import { Injectable } from "@nestjs/common";
import { prismaService } from "src/prisma/prima.service";
import { prismaModule } from "src/prisma/prisma.module";



@Injectable()

export class likeService{

constructor(private prisma:prismaService){}

createLikeonComment(userId:number,commentId?:number){
    return this.prisma.like.create({
        data:{userId,commentId}
    })
}

createLikeOnBlog(userId:number,blogId?:number){
    return this.prisma.like.create({
        data:{
            userId,blogId
        }
    })
}


findLikes(blogId:number){
    return this.prisma.like.findMany({where:{blogId},include:{blog:true,user:true}})
}

}