import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";
import { ProgramGroupGroupTypeControllerBase } from "./base/programGroupGroupType.controller.base";

@swagger.ApiTags("programGroupGroupTypes")
@common.Controller("programGroupGroupTypes")
export class ProgramGroupGroupTypeController extends ProgramGroupGroupTypeControllerBase {
  constructor(protected readonly service: ProgramGroupGroupTypeService) {
    super(service);
  }
}
