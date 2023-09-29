import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";
import { SlateProgramsMseReviewedControllerBase } from "./base/slateProgramsMseReviewed.controller.base";

@swagger.ApiTags("slateProgramsMseRevieweds")
@common.Controller("slateProgramsMseRevieweds")
export class SlateProgramsMseReviewedController extends SlateProgramsMseReviewedControllerBase {
  constructor(protected readonly service: SlateProgramsMseReviewedService) {
    super(service);
  }
}
