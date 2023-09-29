import { Module } from "@nestjs/common";
import { PaymentAuditModuleBase } from "./base/paymentAudit.module.base";
import { PaymentAuditService } from "./paymentAudit.service";
import { PaymentAuditController } from "./paymentAudit.controller";
import { PaymentAuditResolver } from "./paymentAudit.resolver";

@Module({
  imports: [PaymentAuditModuleBase],
  controllers: [PaymentAuditController],
  providers: [PaymentAuditService, PaymentAuditResolver],
  exports: [PaymentAuditService],
})
export class PaymentAuditModule {}
