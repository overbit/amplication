import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuUsersUsertypesOrigService } from "./luUsersUsertypesOrig.service";
import { LuUsersUsertypesOrigControllerBase } from "./base/luUsersUsertypesOrig.controller.base";

@swagger.ApiTags("luUsersUsertypesOrigs")
@common.Controller("luUsersUsertypesOrigs")
export class LuUsersUsertypesOrigController extends LuUsersUsertypesOrigControllerBase {
  constructor(protected readonly service: LuUsersUsertypesOrigService) {
    super(service);
  }
}
