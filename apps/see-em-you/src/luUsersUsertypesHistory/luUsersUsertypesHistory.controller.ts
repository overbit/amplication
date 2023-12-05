import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuUsersUsertypesHistoryService } from "./luUsersUsertypesHistory.service";
import { LuUsersUsertypesHistoryControllerBase } from "./base/luUsersUsertypesHistory.controller.base";

@swagger.ApiTags("luUsersUsertypesHistories")
@common.Controller("luUsersUsertypesHistories")
export class LuUsersUsertypesHistoryController extends LuUsersUsertypesHistoryControllerBase {
  constructor(protected readonly service: LuUsersUsertypesHistoryService) {
    super(service);
  }
}
