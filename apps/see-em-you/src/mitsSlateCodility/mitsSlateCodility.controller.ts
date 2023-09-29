import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";
import { MitsSlateCodilityControllerBase } from "./base/mitsSlateCodility.controller.base";

@swagger.ApiTags("mitsSlateCodilities")
@common.Controller("mitsSlateCodilities")
export class MitsSlateCodilityController extends MitsSlateCodilityControllerBase {
  constructor(protected readonly service: MitsSlateCodilityService) {
    super(service);
  }
}
