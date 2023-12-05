import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuReviewInterestService } from "./luReviewInterest.service";
import { LuReviewInterestControllerBase } from "./base/luReviewInterest.controller.base";

@swagger.ApiTags("luReviewInterests")
@common.Controller("luReviewInterests")
export class LuReviewInterestController extends LuReviewInterestControllerBase {
  constructor(protected readonly service: LuReviewInterestService) {
    super(service);
  }
}
