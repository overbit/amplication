import { Module } from "@nestjs/common";
import { GroupRankModuleBase } from "./base/groupRank.module.base";
import { GroupRankService } from "./groupRank.service";
import { GroupRankController } from "./groupRank.controller";
import { GroupRankResolver } from "./groupRank.resolver";

@Module({
  imports: [GroupRankModuleBase],
  controllers: [GroupRankController],
  providers: [GroupRankService, GroupRankResolver],
  exports: [GroupRankService],
})
export class GroupRankModule {}
