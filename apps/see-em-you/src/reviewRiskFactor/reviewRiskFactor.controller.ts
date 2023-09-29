import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";
import { ReviewRiskFactorControllerBase } from "./base/reviewRiskFactor.controller.base";

@swagger.ApiTags("reviewRiskFactors")
@common.Controller("reviewRiskFactors")
export class ReviewRiskFactorController extends ReviewRiskFactorControllerBase {
  constructor(protected readonly service: ReviewRiskFactorService) {
    super(service);
  }
}
