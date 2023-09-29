import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";
import { ReviewRiskFactorOtherControllerBase } from "./base/reviewRiskFactorOther.controller.base";

@swagger.ApiTags("reviewRiskFactorOthers")
@common.Controller("reviewRiskFactorOthers")
export class ReviewRiskFactorOtherController extends ReviewRiskFactorOtherControllerBase {
  constructor(protected readonly service: ReviewRiskFactorOtherService) {
    super(service);
  }
}
