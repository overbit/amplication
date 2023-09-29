import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseRiskFactorService } from "./mseRiskFactor.service";
import { MseRiskFactorControllerBase } from "./base/mseRiskFactor.controller.base";

@swagger.ApiTags("mseRiskFactors")
@common.Controller("mseRiskFactors")
export class MseRiskFactorController extends MseRiskFactorControllerBase {
  constructor(protected readonly service: MseRiskFactorService) {
    super(service);
  }
}
