import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupRankMemberServiceBase } from "./base/groupRankMember.service.base";

@Injectable()
export class GroupRankMemberService extends GroupRankMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
