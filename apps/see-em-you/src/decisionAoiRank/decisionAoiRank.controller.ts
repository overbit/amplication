import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DecisionAoiRankService } from "./decisionAoiRank.service";
import { DecisionAoiRankControllerBase } from "./base/decisionAoiRank.controller.base";

@swagger.ApiTags("decisionAoiRanks")
@common.Controller("decisionAoiRanks")
export class DecisionAoiRankController extends DecisionAoiRankControllerBase {
  constructor(protected readonly service: DecisionAoiRankService) {
    super(service);
  }
}
