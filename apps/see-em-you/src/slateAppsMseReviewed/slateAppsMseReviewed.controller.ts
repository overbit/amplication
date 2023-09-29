import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateAppsMseReviewedService } from "./slateAppsMseReviewed.service";
import { SlateAppsMseReviewedControllerBase } from "./base/slateAppsMseReviewed.controller.base";

@swagger.ApiTags("slateAppsMseRevieweds")
@common.Controller("slateAppsMseRevieweds")
export class SlateAppsMseReviewedController extends SlateAppsMseReviewedControllerBase {
  constructor(protected readonly service: SlateAppsMseReviewedService) {
    super(service);
  }
}
