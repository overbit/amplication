import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentNewService } from "./paymentNew.service";
import { PaymentNewControllerBase } from "./base/paymentNew.controller.base";

@swagger.ApiTags("paymentNews")
@common.Controller("paymentNews")
export class PaymentNewController extends PaymentNewControllerBase {
  constructor(protected readonly service: PaymentNewService) {
    super(service);
  }
}
