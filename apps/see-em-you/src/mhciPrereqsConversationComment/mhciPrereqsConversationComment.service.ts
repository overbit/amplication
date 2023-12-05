import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsConversationCommentServiceBase } from "./base/mhciPrereqsConversationComment.service.base";

@Injectable()
export class MhciPrereqsConversationCommentService extends MhciPrereqsConversationCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
