import { Module } from "@nestjs/common";
import { DecisionAoiRankModuleBase } from "./base/decisionAoiRank.module.base";
import { DecisionAoiRankService } from "./decisionAoiRank.service";
import { DecisionAoiRankController } from "./decisionAoiRank.controller";
import { DecisionAoiRankResolver } from "./decisionAoiRank.resolver";

@Module({
  imports: [DecisionAoiRankModuleBase],
  controllers: [DecisionAoiRankController],
  providers: [DecisionAoiRankService, DecisionAoiRankResolver],
  exports: [DecisionAoiRankService],
})
export class DecisionAoiRankModule {}
