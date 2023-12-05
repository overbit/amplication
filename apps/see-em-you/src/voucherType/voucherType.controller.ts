import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoucherTypeService } from "./voucherType.service";
import { VoucherTypeControllerBase } from "./base/voucherType.controller.base";

@swagger.ApiTags("voucherTypes")
@common.Controller("voucherTypes")
export class VoucherTypeController extends VoucherTypeControllerBase {
  constructor(protected readonly service: VoucherTypeService) {
    super(service);
  }
}
