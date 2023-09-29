import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDecisionHistoryServiceBase } from "./base/studentDecisionHistory.service.base";

@Injectable()
export class StudentDecisionHistoryService extends StudentDecisionHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
