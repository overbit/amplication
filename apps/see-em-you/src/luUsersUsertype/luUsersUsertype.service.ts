import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuUsersUsertypeServiceBase } from "./base/luUsersUsertype.service.base";

@Injectable()
export class LuUsersUsertypeService extends LuUsersUsertypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
