import { Module } from "@nestjs/common";
import { LuReviewerGroupModuleBase } from "./base/luReviewerGroup.module.base";
import { LuReviewerGroupService } from "./luReviewerGroup.service";
import { LuReviewerGroupController } from "./luReviewerGroup.controller";
import { LuReviewerGroupResolver } from "./luReviewerGroup.resolver";

@Module({
  imports: [LuReviewerGroupModuleBase],
  controllers: [LuReviewerGroupController],
  providers: [LuReviewerGroupService, LuReviewerGroupResolver],
  exports: [LuReviewerGroupService],
})
export class LuReviewerGroupModule {}
