import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoucherApplicationErrorService } from "./voucherApplicationError.service";
import { VoucherApplicationErrorControllerBase } from "./base/voucherApplicationError.controller.base";

@swagger.ApiTags("voucherApplicationErrors")
@common.Controller("voucherApplicationErrors")
export class VoucherApplicationErrorController extends VoucherApplicationErrorControllerBase {
  constructor(protected readonly service: VoucherApplicationErrorService) {
    super(service);
  }
}
