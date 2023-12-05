import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";
import { MultiprogramlockoutControllerBase } from "./base/multiprogramlockout.controller.base";

@swagger.ApiTags("multiprogramlockouts")
@common.Controller("multiprogramlockouts")
export class MultiprogramlockoutController extends MultiprogramlockoutControllerBase {
  constructor(protected readonly service: MultiprogramlockoutService) {
    super(service);
  }
}
