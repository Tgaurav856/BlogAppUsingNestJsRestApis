import { Injectable } from "@nestjs/common";
import { createBlogDto } from "src/dtos/blog.dto";
import { updateBlogDto } from "src/dtos/updateblog.dto";
import { prismaService } from "src/prisma/prima.service";



@Injectable()

export class blogService{

    constructor(private prisma :prismaService){}

    createBlog(blogdto:createBlogDto,authorId:number){

        return this.prisma.blog.create({
            data:{...blogdto,authorId}
        })
    }

    findBlogByAuthor(authorId:number){
        return this.prisma.blog.findMany({where:{authorId},include:{author:true,comment:true}})
        
    }

    findBlog(){
        return this.prisma.blog.findMany({include:{author:true,comment:true}})
    }

    findBlogById(id:number){
        return this.prisma.blog.findUnique({where:{id},include:{author:true,comment:true}})
    }

    updateBlog(id:number,dto:updateBlogDto){
        const blog= this.prisma.blog.update({where:{id},data:dto})
        return blog
    }

    async removeBlog(id:number){
        await this.prisma.comment.deleteMany({where:{parentId:id,blogId:id}})

       await this.prisma.comment.deleteMany({where:{blogId:id}})

       await this.prisma.like.deleteMany({where:{blogId:id}})
  
       return this.prisma.blog.delete({where:{id}})
    }
}