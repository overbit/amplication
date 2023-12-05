import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";
import { MseRiskFactorsDecisionControllerBase } from "./base/mseRiskFactorsDecision.controller.base";

@swagger.ApiTags("mseRiskFactorsDecisions")
@common.Controller("mseRiskFactorsDecisions")
export class MseRiskFactorsDecisionController extends MseRiskFactorsDecisionControllerBase {
  constructor(protected readonly service: MseRiskFactorsDecisionService) {
    super(service);
  }
}
