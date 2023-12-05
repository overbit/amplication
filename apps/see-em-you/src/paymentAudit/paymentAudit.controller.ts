import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentAuditService } from "./paymentAudit.service";
import { PaymentAuditControllerBase } from "./base/paymentAudit.controller.base";

@swagger.ApiTags("paymentAudits")
@common.Controller("paymentAudits")
export class PaymentAuditController extends PaymentAuditControllerBase {
  constructor(protected readonly service: PaymentAuditService) {
    super(service);
  }
}
