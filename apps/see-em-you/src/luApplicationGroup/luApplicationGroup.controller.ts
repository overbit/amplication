import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationGroupService } from "./luApplicationGroup.service";
import { LuApplicationGroupControllerBase } from "./base/luApplicationGroup.controller.base";

@swagger.ApiTags("luApplicationGroups")
@common.Controller("luApplicationGroups")
export class LuApplicationGroupController extends LuApplicationGroupControllerBase {
  constructor(protected readonly service: LuApplicationGroupService) {
    super(service);
  }
}
