import { Body, Controller, Param, Post, Get, Delete, UseGuards, Request } from "@nestjs/common";
import { commentService } from "./comment.service";
import { createCommentDto } from "src/dtos/comment.dto";
import { JwtAuthGuard } from "src/auth/guard";




@Controller('comment')

export class CommentController {

  constructor(private commentService: commentService) { }

  @Post(':userId/:blogId')
  @UseGuards(JwtAuthGuard)
  createComment(@Param('userId') userId: number,
    @Param('blogId') blogId: number,
    @Body() dto: createCommentDto,
    @Request() req) {
      

    if (userId !== req.user.userId) {
      throw new Error('You are not the user');
    }
    return this.commentService.createComment(dto, +userId, +blogId)
  }

  @Post(':userId/:blogId/:parentId')
  create(@Param('userId') userId: number,
    @Param('blogId') blogId: number,
    @Param('parentId') parentId: number,
    @Body() dto: createCommentDto
  ) {

    return this.commentService.createCommentOnComment(dto, +userId, +blogId, +parentId)

  }
  @Get('allComment')
  findComment() {
    return this.commentService.findComment()
  }

  @Get(':userId')
  findCommentbyBlog(@Param('userId') userId: number) {
    return this.commentService.findByuser(+userId)
  }



  @Delete(':id')
  deleteComment(@Param('id') id: number) {
    return this.commentService.removeComment(+id)
  }
}