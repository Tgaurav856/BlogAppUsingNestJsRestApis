import { Body, Controller, Param, ParseIntPipe, Post, Get, Patch, Delete, NotFoundException, ForbiddenException, UseGuards, Request } from "@nestjs/common";
import { blogService } from "./blog.service";
import { createBlogDto } from "src/dtos/blog.dto";
import { updateBlogDto } from "src/dtos/updateblog.dto";
import { JwtAuthGuard } from "src/auth/guard";






@Controller('blog')




export class blogController {

    constructor(private blogService: blogService) { }

    @Post(':autherId')
    @UseGuards(JwtAuthGuard)
    createBlog(
        @Param('autherId', ParseIntPipe) autherId: number,
        @Body() dto: createBlogDto,

        @Request() req
    ) {
        console.log(req.user)
        if (autherId !== req.user.userId) {
            throw new Error('You are not the author of this blog.');
        }
        console.log("hello")
        return this.blogService.createBlog(dto, autherId)
    }

    @Get('allblog')
    findBlog() {
        return this.blogService.findBlog()
    }

    @Get(':authorId')

    async blogByAuther(@Param('authorId') authorId: number,
    ) {
       
        const blog = await this.blogService.findBlogByAuthor(+authorId)

        if (!blog) {
            throw new NotFoundException('No blog found ');
        }
        return blog
    }

    @Get(':id')
    blog(@Param('id') id: number) {
        return this.blogService.findBlogById(+id)
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    async updateBlog(@Param('id') id: number,
        @Body() dto: updateBlogDto,
    @Request() req) {
        const blog=await this.blogService.findBlogById(+id)
        console.log(blog)

        if(blog.authorId!==req.user.userId){
            throw new Error('You are not the author of this blog.');
        }
        return this.blogService.updateBlog(+id, dto)
    }


    @Delete(':id')
    deleteBlog(@Param('id') id: number,

    ) {


        return this.blogService.removeBlog(+id)
    }
}