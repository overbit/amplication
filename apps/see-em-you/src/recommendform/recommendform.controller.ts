import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecommendformService } from "./recommendform.service";
import { RecommendformControllerBase } from "./base/recommendform.controller.base";

@swagger.ApiTags("recommendforms")
@common.Controller("recommendforms")
export class RecommendformController extends RecommendformControllerBase {
  constructor(protected readonly service: RecommendformService) {
    super(service);
  }
}
