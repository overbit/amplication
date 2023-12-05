import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramGroupRoleService } from "./programGroupRole.service";
import { ProgramGroupRoleControllerBase } from "./base/programGroupRole.controller.base";

@swagger.ApiTags("programGroupRoles")
@common.Controller("programGroupRoles")
export class ProgramGroupRoleController extends ProgramGroupRoleControllerBase {
  constructor(protected readonly service: ProgramGroupRoleService) {
    super(service);
  }
}
