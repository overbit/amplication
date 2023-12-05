import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersInfoServiceBase } from "./base/usersInfo.service.base";

@Injectable()
export class UsersInfoService extends UsersInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
