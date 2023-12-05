import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";
import { MitsSlateAppsMseReviewedControllerBase } from "./base/mitsSlateAppsMseReviewed.controller.base";

@swagger.ApiTags("mitsSlateAppsMseRevieweds")
@common.Controller("mitsSlateAppsMseRevieweds")
export class MitsSlateAppsMseReviewedController extends MitsSlateAppsMseReviewedControllerBase {
  constructor(protected readonly service: MitsSlateAppsMseReviewedService) {
    super(service);
  }
}
