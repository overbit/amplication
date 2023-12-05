import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentItemService } from "./paymentItem.service";
import { PaymentItemControllerBase } from "./base/paymentItem.controller.base";

@swagger.ApiTags("paymentItems")
@common.Controller("paymentItems")
export class PaymentItemController extends PaymentItemControllerBase {
  constructor(protected readonly service: PaymentItemService) {
    super(service);
  }
}
