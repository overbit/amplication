import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GrescoreService } from "./grescore.service";
import { GrescoreControllerBase } from "./base/grescore.controller.base";

@swagger.ApiTags("grescores")
@common.Controller("grescores")
export class GrescoreController extends GrescoreControllerBase {
  constructor(protected readonly service: GrescoreService) {
    super(service);
  }
}
