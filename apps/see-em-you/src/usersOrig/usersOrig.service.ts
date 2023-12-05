import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersOrigServiceBase } from "./base/usersOrig.service.base";

@Injectable()
export class UsersOrigService extends UsersOrigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
