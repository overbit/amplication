import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupRankServiceBase } from "./base/groupRank.service.base";

@Injectable()
export class GroupRankService extends GroupRankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
