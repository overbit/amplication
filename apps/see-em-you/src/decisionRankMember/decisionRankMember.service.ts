import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecisionRankMemberServiceBase } from "./base/decisionRankMember.service.base";

@Injectable()
export class DecisionRankMemberService extends DecisionRankMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
