import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Injectable()

export class localGuard extends AuthGuard('local'){}

export class authorAuthGuard extends AuthGuard('user'){}
