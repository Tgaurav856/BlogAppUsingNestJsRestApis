import { Module } from "@nestjs/common";
import { likeService } from "./like.services";
import { likeController } from "./like.controller";


@Module({
imports:[],
providers:[likeService],
controllers:[likeController]
})
export class likeModule{}