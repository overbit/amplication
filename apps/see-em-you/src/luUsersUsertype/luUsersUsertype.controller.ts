import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";
import { LuUsersUsertypeControllerBase } from "./base/luUsersUsertype.controller.base";

@swagger.ApiTags("luUsersUsertypes")
@common.Controller("luUsersUsertypes")
export class LuUsersUsertypeController extends LuUsersUsertypeControllerBase {
  constructor(protected readonly service: LuUsersUsertypeService) {
    super(service);
  }
}
