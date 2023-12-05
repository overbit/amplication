import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupRankService } from "./groupRank.service";
import { GroupRankControllerBase } from "./base/groupRank.controller.base";

@swagger.ApiTags("groupRanks")
@common.Controller("groupRanks")
export class GroupRankController extends GroupRankControllerBase {
  constructor(protected readonly service: GroupRankService) {
    super(service);
  }
}
