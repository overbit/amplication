import { Module } from "@nestjs/common";
import { DecisionRankMemberModuleBase } from "./base/decisionRankMember.module.base";
import { DecisionRankMemberService } from "./decisionRankMember.service";
import { DecisionRankMemberController } from "./decisionRankMember.controller";
import { DecisionRankMemberResolver } from "./decisionRankMember.resolver";

@Module({
  imports: [DecisionRankMemberModuleBase],
  controllers: [DecisionRankMemberController],
  providers: [DecisionRankMemberService, DecisionRankMemberResolver],
  exports: [DecisionRankMemberService],
})
export class DecisionRankMemberModule {}
