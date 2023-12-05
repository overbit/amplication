import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CashnetPaymentCopyService } from "./cashnetPaymentCopy.service";
import { CashnetPaymentCopyControllerBase } from "./base/cashnetPaymentCopy.controller.base";

@swagger.ApiTags("cashnetPaymentCopies")
@common.Controller("cashnetPaymentCopies")
export class CashnetPaymentCopyController extends CashnetPaymentCopyControllerBase {
  constructor(protected readonly service: CashnetPaymentCopyService) {
    super(service);
  }
}
