import { Module } from "@nestjs/common";
import { StudentDecisionModuleBase } from "./base/studentDecision.module.base";
import { StudentDecisionService } from "./studentDecision.service";
import { StudentDecisionController } from "./studentDecision.controller";
import { StudentDecisionResolver } from "./studentDecision.resolver";

@Module({
  imports: [StudentDecisionModuleBase],
  controllers: [StudentDecisionController],
  providers: [StudentDecisionService, StudentDecisionResolver],
  exports: [StudentDecisionService],
})
export class StudentDecisionModule {}
