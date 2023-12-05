import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateCodilityService } from "./slateCodility.service";
import { SlateCodilityControllerBase } from "./base/slateCodility.controller.base";

@swagger.ApiTags("slateCodilities")
@common.Controller("slateCodilities")
export class SlateCodilityController extends SlateCodilityControllerBase {
  constructor(protected readonly service: SlateCodilityService) {
    super(service);
  }
}
