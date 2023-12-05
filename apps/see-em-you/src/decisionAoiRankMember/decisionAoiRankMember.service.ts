import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecisionAoiRankMemberServiceBase } from "./base/decisionAoiRankMember.service.base";

@Injectable()
export class DecisionAoiRankMemberService extends DecisionAoiRankMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
