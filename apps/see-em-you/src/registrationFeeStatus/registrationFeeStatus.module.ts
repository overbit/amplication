import { Module } from "@nestjs/common";
import { RegistrationFeeStatusModuleBase } from "./base/registrationFeeStatus.module.base";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";
import { RegistrationFeeStatusController } from "./registrationFeeStatus.controller";
import { RegistrationFeeStatusResolver } from "./registrationFeeStatus.resolver";

@Module({
  imports: [RegistrationFeeStatusModuleBase],
  controllers: [RegistrationFeeStatusController],
  providers: [RegistrationFeeStatusService, RegistrationFeeStatusResolver],
  exports: [RegistrationFeeStatusService],
})
export class RegistrationFeeStatusModule {}
