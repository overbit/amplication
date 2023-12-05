import { Module } from "@nestjs/common";
import { LtiMastersAdmitModuleBase } from "./base/ltiMastersAdmit.module.base";
import { LtiMastersAdmitService } from "./ltiMastersAdmit.service";
import { LtiMastersAdmitController } from "./ltiMastersAdmit.controller";
import { LtiMastersAdmitResolver } from "./ltiMastersAdmit.resolver";

@Module({
  imports: [LtiMastersAdmitModuleBase],
  controllers: [LtiMastersAdmitController],
  providers: [LtiMastersAdmitService, LtiMastersAdmitResolver],
  exports: [LtiMastersAdmitService],
})
export class LtiMastersAdmitModule {}
