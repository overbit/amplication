import { Module } from "@nestjs/common";
import { DecisionAoiRankMemberModuleBase } from "./base/decisionAoiRankMember.module.base";
import { DecisionAoiRankMemberService } from "./decisionAoiRankMember.service";
import { DecisionAoiRankMemberController } from "./decisionAoiRankMember.controller";
import { DecisionAoiRankMemberResolver } from "./decisionAoiRankMember.resolver";

@Module({
  imports: [DecisionAoiRankMemberModuleBase],
  controllers: [DecisionAoiRankMemberController],
  providers: [DecisionAoiRankMemberService, DecisionAoiRankMemberResolver],
  exports: [DecisionAoiRankMemberService],
})
export class DecisionAoiRankMemberModule {}
