import { Module } from "@nestjs/common";
import { CashnetPaymentCopyModuleBase } from "./base/cashnetPaymentCopy.module.base";
import { CashnetPaymentCopyService } from "./cashnetPaymentCopy.service";
import { CashnetPaymentCopyController } from "./cashnetPaymentCopy.controller";
import { CashnetPaymentCopyResolver } from "./cashnetPaymentCopy.resolver";

@Module({
  imports: [CashnetPaymentCopyModuleBase],
  controllers: [CashnetPaymentCopyController],
  providers: [CashnetPaymentCopyService, CashnetPaymentCopyResolver],
  exports: [CashnetPaymentCopyService],
})
export class CashnetPaymentCopyModule {}
