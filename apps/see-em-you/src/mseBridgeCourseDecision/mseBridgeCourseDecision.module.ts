import { Module } from "@nestjs/common";
import { MseBridgeCourseDecisionModuleBase } from "./base/mseBridgeCourseDecision.module.base";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";
import { MseBridgeCourseDecisionController } from "./mseBridgeCourseDecision.controller";
import { MseBridgeCourseDecisionResolver } from "./mseBridgeCourseDecision.resolver";

@Module({
  imports: [MseBridgeCourseDecisionModuleBase],
  controllers: [MseBridgeCourseDecisionController],
  providers: [MseBridgeCourseDecisionService, MseBridgeCourseDecisionResolver],
  exports: [MseBridgeCourseDecisionService],
})
export class MseBridgeCourseDecisionModule {}
