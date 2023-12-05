import { Module } from "@nestjs/common";
import { AdmissionModuleBase } from "./base/admission.module.base";
import { AdmissionService } from "./admission.service";
import { AdmissionController } from "./admission.controller";
import { AdmissionResolver } from "./admission.resolver";

@Module({
  imports: [AdmissionModuleBase],
  controllers: [AdmissionController],
  providers: [AdmissionService, AdmissionResolver],
  exports: [AdmissionService],
})
export class AdmissionModule {}
