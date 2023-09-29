import { Module } from "@nestjs/common";
import { ApplicationDecisionIniModuleBase } from "./base/applicationDecisionIni.module.base";
import { ApplicationDecisionIniService } from "./applicationDecisionIni.service";
import { ApplicationDecisionIniController } from "./applicationDecisionIni.controller";
import { ApplicationDecisionIniResolver } from "./applicationDecisionIni.resolver";

@Module({
  imports: [ApplicationDecisionIniModuleBase],
  controllers: [ApplicationDecisionIniController],
  providers: [ApplicationDecisionIniService, ApplicationDecisionIniResolver],
  exports: [ApplicationDecisionIniService],
})
export class ApplicationDecisionIniModule {}
