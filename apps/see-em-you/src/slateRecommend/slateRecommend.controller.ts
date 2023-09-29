import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateRecommendService } from "./slateRecommend.service";
import { SlateRecommendControllerBase } from "./base/slateRecommend.controller.base";

@swagger.ApiTags("slateRecommends")
@common.Controller("slateRecommends")
export class SlateRecommendController extends SlateRecommendControllerBase {
  constructor(protected readonly service: SlateRecommendService) {
    super(service);
  }
}
