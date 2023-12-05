import { Module } from "@nestjs/common";
import { PaymentNewModuleBase } from "./base/paymentNew.module.base";
import { PaymentNewService } from "./paymentNew.service";
import { PaymentNewController } from "./paymentNew.controller";
import { PaymentNewResolver } from "./paymentNew.resolver";

@Module({
  imports: [PaymentNewModuleBase],
  controllers: [PaymentNewController],
  providers: [PaymentNewService, PaymentNewResolver],
  exports: [PaymentNewService],
})
export class PaymentNewModule {}
