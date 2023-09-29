import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateGreService } from "./mitsSlateGre.service";
import { MitsSlateGreControllerBase } from "./base/mitsSlateGre.controller.base";

@swagger.ApiTags("mitsSlateGres")
@common.Controller("mitsSlateGres")
export class MitsSlateGreController extends MitsSlateGreControllerBase {
  constructor(protected readonly service: MitsSlateGreService) {
    super(service);
  }
}
