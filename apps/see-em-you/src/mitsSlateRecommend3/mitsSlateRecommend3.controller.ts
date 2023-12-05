import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateRecommend3Service } from "./mitsSlateRecommend3.service";
import { MitsSlateRecommend3ControllerBase } from "./base/mitsSlateRecommend3.controller.base";

@swagger.ApiTags("mitsSlateRecommend3s")
@common.Controller("mitsSlateRecommend3s")
export class MitsSlateRecommend3Controller extends MitsSlateRecommend3ControllerBase {
  constructor(protected readonly service: MitsSlateRecommend3Service) {
    super(service);
  }
}
