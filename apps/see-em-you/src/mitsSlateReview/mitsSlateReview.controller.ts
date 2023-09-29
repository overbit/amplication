import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateReviewService } from "./mitsSlateReview.service";
import { MitsSlateReviewControllerBase } from "./base/mitsSlateReview.controller.base";

@swagger.ApiTags("mitsSlateReviews")
@common.Controller("mitsSlateReviews")
export class MitsSlateReviewController extends MitsSlateReviewControllerBase {
  constructor(protected readonly service: MitsSlateReviewService) {
    super(service);
  }
}
