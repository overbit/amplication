import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";
import { MitsSlateRecommendControllerBase } from "./base/mitsSlateRecommend.controller.base";

@swagger.ApiTags("mitsSlateRecommends")
@common.Controller("mitsSlateRecommends")
export class MitsSlateRecommendController extends MitsSlateRecommendControllerBase {
  constructor(protected readonly service: MitsSlateRecommendService) {
    super(service);
  }
}
