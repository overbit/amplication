import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtsToeflScoreService } from "./etsToeflScore.service";
import { EtsToeflScoreControllerBase } from "./base/etsToeflScore.controller.base";

@swagger.ApiTags("etsToeflScores")
@common.Controller("etsToeflScores")
export class EtsToeflScoreController extends EtsToeflScoreControllerBase {
  constructor(protected readonly service: EtsToeflScoreService) {
    super(service);
  }
}
