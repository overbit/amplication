import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UnitRoleService } from "./unitRole.service";
import { UnitRoleControllerBase } from "./base/unitRole.controller.base";

@swagger.ApiTags("unitRoles")
@common.Controller("unitRoles")
export class UnitRoleController extends UnitRoleControllerBase {
  constructor(protected readonly service: UnitRoleService) {
    super(service);
  }
}
