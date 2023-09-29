import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseCodilityService } from "./mseCodility.service";
import { MseCodilityControllerBase } from "./base/mseCodility.controller.base";

@swagger.ApiTags("mseCodilities")
@common.Controller("mseCodilities")
export class MseCodilityController extends MseCodilityControllerBase {
  constructor(protected readonly service: MseCodilityService) {
    super(service);
  }
}
