import { Module } from "@nestjs/common";
import { DecisionRankModuleBase } from "./base/decisionRank.module.base";
import { DecisionRankService } from "./decisionRank.service";
import { DecisionRankController } from "./decisionRank.controller";
import { DecisionRankResolver } from "./decisionRank.resolver";

@Module({
  imports: [DecisionRankModuleBase],
  controllers: [DecisionRankController],
  providers: [DecisionRankService, DecisionRankResolver],
  exports: [DecisionRankService],
})
export class DecisionRankModule {}
