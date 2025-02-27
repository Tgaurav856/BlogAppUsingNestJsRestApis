import { Injectable } from "@nestjs/common";
import { createCommentDto } from "src/dtos/comment.dto";
import { prismaService } from "src/prisma/prima.service";



@Injectable()

export class commentService {


  constructor(private prisma: prismaService) { }

  createComment(blogdto: createCommentDto, userId: number, blogId: number) {

    return this.prisma.comment.create({
      data: { ...blogdto, userId, blogId }
    })
  }


  createCommentOnComment(dto: createCommentDto, userId: number, blogId: number, parentId?: number) {


    return this.prisma.comment.create({
      data: {
        content: dto.content,
        userId,
        blogId,
        parentId
      }
    })
  }


  findComment() {
    return this.prisma.comment.findMany() 
  }
  findByuser(userId: number) {

    return this.prisma.comment.findMany({ where: { userId }, include: { user: true, blog: true, parent:true } })
  }

 

  async removeComment(id:number){
    await this.prisma.comment.deleteMany({where:{parentId:id}})

    return this.prisma.comment.delete({where:{id}})
}
}
