import { Module } from "@nestjs/common";
import { CashnetPaymentModuleBase } from "./base/cashnetPayment.module.base";
import { CashnetPaymentService } from "./cashnetPayment.service";
import { CashnetPaymentController } from "./cashnetPayment.controller";
import { CashnetPaymentResolver } from "./cashnetPayment.resolver";

@Module({
  imports: [CashnetPaymentModuleBase],
  controllers: [CashnetPaymentController],
  providers: [CashnetPaymentService, CashnetPaymentResolver],
  exports: [CashnetPaymentService],
})
export class CashnetPaymentModule {}
