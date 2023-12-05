import { Module } from "@nestjs/common";
import { GroupRankCommentModuleBase } from "./base/groupRankComment.module.base";
import { GroupRankCommentService } from "./groupRankComment.service";
import { GroupRankCommentController } from "./groupRankComment.controller";
import { GroupRankCommentResolver } from "./groupRankComment.resolver";

@Module({
  imports: [GroupRankCommentModuleBase],
  controllers: [GroupRankCommentController],
  providers: [GroupRankCommentService, GroupRankCommentResolver],
  exports: [GroupRankCommentService],
})
export class GroupRankCommentModule {}
