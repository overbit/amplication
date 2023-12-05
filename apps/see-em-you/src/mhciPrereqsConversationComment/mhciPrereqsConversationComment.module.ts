import { Module } from "@nestjs/common";
import { MhciPrereqsConversationCommentModuleBase } from "./base/mhciPrereqsConversationComment.module.base";
import { MhciPrereqsConversationCommentService } from "./mhciPrereqsConversationComment.service";
import { MhciPrereqsConversationCommentController } from "./mhciPrereqsConversationComment.controller";
import { MhciPrereqsConversationCommentResolver } from "./mhciPrereqsConversationComment.resolver";

@Module({
  imports: [MhciPrereqsConversationCommentModuleBase],
  controllers: [MhciPrereqsConversationCommentController],
  providers: [
    MhciPrereqsConversationCommentService,
    MhciPrereqsConversationCommentResolver,
  ],
  exports: [MhciPrereqsConversationCommentService],
})
export class MhciPrereqsConversationCommentModule {}
