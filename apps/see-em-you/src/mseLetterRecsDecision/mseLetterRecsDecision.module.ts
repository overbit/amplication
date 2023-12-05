import { Module } from "@nestjs/common";
import { MseLetterRecsDecisionModuleBase } from "./base/mseLetterRecsDecision.module.base";
import { MseLetterRecsDecisionService } from "./mseLetterRecsDecision.service";
import { MseLetterRecsDecisionController } from "./mseLetterRecsDecision.controller";
import { MseLetterRecsDecisionResolver } from "./mseLetterRecsDecision.resolver";

@Module({
  imports: [MseLetterRecsDecisionModuleBase],
  controllers: [MseLetterRecsDecisionController],
  providers: [MseLetterRecsDecisionService, MseLetterRecsDecisionResolver],
  exports: [MseLetterRecsDecisionService],
})
export class MseLetterRecsDecisionModule {}
