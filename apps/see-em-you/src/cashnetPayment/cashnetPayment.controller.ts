import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CashnetPaymentService } from "./cashnetPayment.service";
import { CashnetPaymentControllerBase } from "./base/cashnetPayment.controller.base";

@swagger.ApiTags("cashnetPayments")
@common.Controller("cashnetPayments")
export class CashnetPaymentController extends CashnetPaymentControllerBase {
  constructor(protected readonly service: CashnetPaymentService) {
    super(service);
  }
}
