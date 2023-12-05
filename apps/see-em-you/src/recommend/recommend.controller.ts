import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecommendService } from "./recommend.service";
import { RecommendControllerBase } from "./base/recommend.controller.base";

@swagger.ApiTags("recommends")
@common.Controller("recommends")
export class RecommendController extends RecommendControllerBase {
  constructor(protected readonly service: RecommendService) {
    super(service);
  }
}
