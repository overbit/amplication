import { Module } from "@nestjs/common";
import { MseRiskFactorsDecisionModuleBase } from "./base/mseRiskFactorsDecision.module.base";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";
import { MseRiskFactorsDecisionController } from "./mseRiskFactorsDecision.controller";
import { MseRiskFactorsDecisionResolver } from "./mseRiskFactorsDecision.resolver";

@Module({
  imports: [MseRiskFactorsDecisionModuleBase],
  controllers: [MseRiskFactorsDecisionController],
  providers: [MseRiskFactorsDecisionService, MseRiskFactorsDecisionResolver],
  exports: [MseRiskFactorsDecisionService],
})
export class MseRiskFactorsDecisionModule {}
