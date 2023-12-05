import { Module } from "@nestjs/common";
import { ApplicationDecisionModuleBase } from "./base/applicationDecision.module.base";
import { ApplicationDecisionService } from "./applicationDecision.service";
import { ApplicationDecisionController } from "./applicationDecision.controller";
import { ApplicationDecisionResolver } from "./applicationDecision.resolver";

@Module({
  imports: [ApplicationDecisionModuleBase],
  controllers: [ApplicationDecisionController],
  providers: [ApplicationDecisionService, ApplicationDecisionResolver],
  exports: [ApplicationDecisionService],
})
export class ApplicationDecisionModule {}
