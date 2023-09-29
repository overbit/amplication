import { Module } from "@nestjs/common";
import { GroupRankMemberModuleBase } from "./base/groupRankMember.module.base";
import { GroupRankMemberService } from "./groupRankMember.service";
import { GroupRankMemberController } from "./groupRankMember.controller";
import { GroupRankMemberResolver } from "./groupRankMember.resolver";

@Module({
  imports: [GroupRankMemberModuleBase],
  controllers: [GroupRankMemberController],
  providers: [GroupRankMemberService, GroupRankMemberResolver],
  exports: [GroupRankMemberService],
})
export class GroupRankMemberModule {}
