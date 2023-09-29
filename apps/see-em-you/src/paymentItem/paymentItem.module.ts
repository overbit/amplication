import { Module } from "@nestjs/common";
import { PaymentItemModuleBase } from "./base/paymentItem.module.base";
import { PaymentItemService } from "./paymentItem.service";
import { PaymentItemController } from "./paymentItem.controller";
import { PaymentItemResolver } from "./paymentItem.resolver";

@Module({
  imports: [PaymentItemModuleBase],
  controllers: [PaymentItemController],
  providers: [PaymentItemService, PaymentItemResolver],
  exports: [PaymentItemService],
})
export class PaymentItemModule {}
