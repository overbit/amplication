import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";
import { MitsSlateIeltControllerBase } from "./base/mitsSlateIelt.controller.base";

@swagger.ApiTags("mitsSlateIelts")
@common.Controller("mitsSlateIelts")
export class MitsSlateIeltController extends MitsSlateIeltControllerBase {
  constructor(protected readonly service: MitsSlateIeltService) {
    super(service);
  }
}
