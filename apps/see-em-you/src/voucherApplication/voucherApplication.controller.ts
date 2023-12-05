import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoucherApplicationService } from "./voucherApplication.service";
import { VoucherApplicationControllerBase } from "./base/voucherApplication.controller.base";

@swagger.ApiTags("voucherApplications")
@common.Controller("voucherApplications")
export class VoucherApplicationController extends VoucherApplicationControllerBase {
  constructor(protected readonly service: VoucherApplicationService) {
    super(service);
  }
}
