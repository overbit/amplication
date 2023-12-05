import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupRankCommentServiceBase } from "./base/groupRankComment.service.base";

@Injectable()
export class GroupRankCommentService extends GroupRankCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
