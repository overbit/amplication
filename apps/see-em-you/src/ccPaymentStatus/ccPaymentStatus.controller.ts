import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";
import { CcPaymentStatusControllerBase } from "./base/ccPaymentStatus.controller.base";

@swagger.ApiTags("ccPaymentStatuses")
@common.Controller("ccPaymentStatuses")
export class CcPaymentStatusController extends CcPaymentStatusControllerBase {
  constructor(protected readonly service: CcPaymentStatusService) {
    super(service);
  }
}
