import { Module } from "@nestjs/common";
import { RegistrationFeePaymentModuleBase } from "./base/registrationFeePayment.module.base";
import { RegistrationFeePaymentService } from "./registrationFeePayment.service";
import { RegistrationFeePaymentController } from "./registrationFeePayment.controller";
import { RegistrationFeePaymentResolver } from "./registrationFeePayment.resolver";

@Module({
  imports: [RegistrationFeePaymentModuleBase],
  controllers: [RegistrationFeePaymentController],
  providers: [RegistrationFeePaymentService, RegistrationFeePaymentResolver],
  exports: [RegistrationFeePaymentService],
})
export class RegistrationFeePaymentModule {}
