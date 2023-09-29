import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";
import { ReviewPositiveFactorOtherControllerBase } from "./base/reviewPositiveFactorOther.controller.base";

@swagger.ApiTags("reviewPositiveFactorOthers")
@common.Controller("reviewPositiveFactorOthers")
export class ReviewPositiveFactorOtherController extends ReviewPositiveFactorOtherControllerBase {
  constructor(protected readonly service: ReviewPositiveFactorOtherService) {
    super(service);
  }
}
