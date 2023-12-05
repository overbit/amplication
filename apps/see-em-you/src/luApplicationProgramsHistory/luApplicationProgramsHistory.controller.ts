import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationProgramsHistoryService } from "./luApplicationProgramsHistory.service";
import { LuApplicationProgramsHistoryControllerBase } from "./base/luApplicationProgramsHistory.controller.base";

@swagger.ApiTags("luApplicationProgramsHistories")
@common.Controller("luApplicationProgramsHistories")
export class LuApplicationProgramsHistoryController extends LuApplicationProgramsHistoryControllerBase {
  constructor(protected readonly service: LuApplicationProgramsHistoryService) {
    super(service);
  }
}
