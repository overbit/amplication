import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersinstServiceBase } from "./base/usersinst.service.base";

@Injectable()
export class UsersinstService extends UsersinstServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
