import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RiskFactorService } from "./riskFactor.service";
import { RiskFactorControllerBase } from "./base/riskFactor.controller.base";

@swagger.ApiTags("riskFactors")
@common.Controller("riskFactors")
export class RiskFactorController extends RiskFactorControllerBase {
  constructor(protected readonly service: RiskFactorService) {
    super(service);
  }
}
