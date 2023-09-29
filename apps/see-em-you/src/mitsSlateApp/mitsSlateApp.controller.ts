import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateAppService } from "./mitsSlateApp.service";
import { MitsSlateAppControllerBase } from "./base/mitsSlateApp.controller.base";

@swagger.ApiTags("mitsSlateApps")
@common.Controller("mitsSlateApps")
export class MitsSlateAppController extends MitsSlateAppControllerBase {
  constructor(protected readonly service: MitsSlateAppService) {
    super(service);
  }
}
