import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecisionRankServiceBase } from "./base/decisionRank.service.base";

@Injectable()
export class DecisionRankService extends DecisionRankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
