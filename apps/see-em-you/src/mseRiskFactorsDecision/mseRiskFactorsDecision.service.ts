import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseRiskFactorsDecisionServiceBase } from "./base/mseRiskFactorsDecision.service.base";

@Injectable()
export class MseRiskFactorsDecisionService extends MseRiskFactorsDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
