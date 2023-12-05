import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramGroupService } from "./programGroup.service";
import { ProgramGroupControllerBase } from "./base/programGroup.controller.base";

@swagger.ApiTags("programGroups")
@common.Controller("programGroups")
export class ProgramGroupController extends ProgramGroupControllerBase {
  constructor(protected readonly service: ProgramGroupService) {
    super(service);
  }
}
