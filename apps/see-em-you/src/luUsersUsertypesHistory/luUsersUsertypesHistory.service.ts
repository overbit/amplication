import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuUsersUsertypesHistoryServiceBase } from "./base/luUsersUsertypesHistory.service.base";

@Injectable()
export class LuUsersUsertypesHistoryService extends LuUsersUsertypesHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
