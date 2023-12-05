import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcoPalService } from "./acoPal.service";
import { AcoPalControllerBase } from "./base/acoPal.controller.base";

@swagger.ApiTags("acoPals")
@common.Controller("acoPals")
export class AcoPalController extends AcoPalControllerBase {
  constructor(protected readonly service: AcoPalService) {
    super(service);
  }
}
