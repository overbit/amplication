import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuUsersUsertypesOrigServiceBase } from "./base/luUsersUsertypesOrig.service.base";

@Injectable()
export class LuUsersUsertypesOrigService extends LuUsersUsertypesOrigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
