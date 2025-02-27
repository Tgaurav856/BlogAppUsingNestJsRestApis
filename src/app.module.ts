import { Module } from '@nestjs/common';
import { prismaModule } from './prisma/prisma.module';
import { prismaService } from './prisma/prima.service';
import { userController } from './user/user.controller';
import { userService } from './user/user.service';
import { authorSerrvice } from './author/author.service';
import { authorController } from './author/author.controller';
import { blogService } from './blog/blog.service';
import { blogController } from './blog/blog.controller';
import { blogModule } from './blog/blog.module';
import { authorModule } from './author/author.module';
import { commentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { likeService } from './like/like.services';
import { likeController } from './like/like.controller';

import { JwtService } from '@nestjs/jwt';

import {  authService } from './auth/auth.service';
import { authController } from './auth/auth.controller';
import { authModule } from './auth/auth.module';


@Module({
  imports: [prismaModule,blogModule,authorModule,authModule],
  providers:[prismaService,userService,authorSerrvice,blogService,commentService,likeService,JwtService,authService],
  controllers:[userController,authorController,blogController,CommentController,likeController,authController]

})
export class AppModule {}
