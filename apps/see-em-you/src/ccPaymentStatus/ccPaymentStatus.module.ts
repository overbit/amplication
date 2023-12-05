import { Module } from "@nestjs/common";
import { CcPaymentStatusModuleBase } from "./base/ccPaymentStatus.module.base";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";
import { CcPaymentStatusController } from "./ccPaymentStatus.controller";
import { CcPaymentStatusResolver } from "./ccPaymentStatus.resolver";

@Module({
  imports: [CcPaymentStatusModuleBase],
  controllers: [CcPaymentStatusController],
  providers: [CcPaymentStatusService, CcPaymentStatusResolver],
  exports: [CcPaymentStatusService],
})
export class CcPaymentStatusModule {}
