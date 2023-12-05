import { Module } from "@nestjs/common";
import { PaymentVoucherModuleBase } from "./base/paymentVoucher.module.base";
import { PaymentVoucherService } from "./paymentVoucher.service";
import { PaymentVoucherController } from "./paymentVoucher.controller";
import { PaymentVoucherResolver } from "./paymentVoucher.resolver";

@Module({
  imports: [PaymentVoucherModuleBase],
  controllers: [PaymentVoucherController],
  providers: [PaymentVoucherService, PaymentVoucherResolver],
  exports: [PaymentVoucherService],
})
export class PaymentVoucherModule {}
