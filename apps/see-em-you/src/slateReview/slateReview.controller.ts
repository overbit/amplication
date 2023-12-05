import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateReviewService } from "./slateReview.service";
import { SlateReviewControllerBase } from "./base/slateReview.controller.base";

@swagger.ApiTags("slateReviews")
@common.Controller("slateReviews")
export class SlateReviewController extends SlateReviewControllerBase {
  constructor(protected readonly service: SlateReviewService) {
    super(service);
  }
}
