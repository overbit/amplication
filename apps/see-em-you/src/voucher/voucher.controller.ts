import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoucherService } from "./voucher.service";
import { VoucherControllerBase } from "./base/voucher.controller.base";

@swagger.ApiTags("vouchers")
@common.Controller("vouchers")
export class VoucherController extends VoucherControllerBase {
  constructor(protected readonly service: VoucherService) {
    super(service);
  }
}
