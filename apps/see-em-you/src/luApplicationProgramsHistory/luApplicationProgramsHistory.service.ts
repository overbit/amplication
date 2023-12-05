import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuApplicationProgramsHistoryServiceBase } from "./base/luApplicationProgramsHistory.service.base";

@Injectable()
export class LuApplicationProgramsHistoryService extends LuApplicationProgramsHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
