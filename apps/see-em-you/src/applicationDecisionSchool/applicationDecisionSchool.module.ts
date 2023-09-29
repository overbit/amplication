import { Module } from "@nestjs/common";
import { ApplicationDecisionSchoolModuleBase } from "./base/applicationDecisionSchool.module.base";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";
import { ApplicationDecisionSchoolController } from "./applicationDecisionSchool.controller";
import { ApplicationDecisionSchoolResolver } from "./applicationDecisionSchool.resolver";

@Module({
  imports: [ApplicationDecisionSchoolModuleBase],
  controllers: [ApplicationDecisionSchoolController],
  providers: [
    ApplicationDecisionSchoolService,
    ApplicationDecisionSchoolResolver,
  ],
  exports: [ApplicationDecisionSchoolService],
})
export class ApplicationDecisionSchoolModule {}
