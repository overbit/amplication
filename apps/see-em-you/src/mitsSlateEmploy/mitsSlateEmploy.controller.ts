import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";
import { MitsSlateEmployControllerBase } from "./base/mitsSlateEmploy.controller.base";

@swagger.ApiTags("mitsSlateEmploys")
@common.Controller("mitsSlateEmploys")
export class MitsSlateEmployController extends MitsSlateEmployControllerBase {
  constructor(protected readonly service: MitsSlateEmployService) {
    super(service);
  }
}
