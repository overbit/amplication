import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecisionAoiRankServiceBase } from "./base/decisionAoiRank.service.base";

@Injectable()
export class DecisionAoiRankService extends DecisionAoiRankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
