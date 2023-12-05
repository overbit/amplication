import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LangProfRecommendService } from "./langProfRecommend.service";
import { LangProfRecommendControllerBase } from "./base/langProfRecommend.controller.base";

@swagger.ApiTags("langProfRecommends")
@common.Controller("langProfRecommends")
export class LangProfRecommendController extends LangProfRecommendControllerBase {
  constructor(protected readonly service: LangProfRecommendService) {
    super(service);
  }
}
