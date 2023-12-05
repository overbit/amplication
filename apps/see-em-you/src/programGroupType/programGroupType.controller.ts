import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramGroupTypeService } from "./programGroupType.service";
import { ProgramGroupTypeControllerBase } from "./base/programGroupType.controller.base";

@swagger.ApiTags("programGroupTypes")
@common.Controller("programGroupTypes")
export class ProgramGroupTypeController extends ProgramGroupTypeControllerBase {
  constructor(protected readonly service: ProgramGroupTypeService) {
    super(service);
  }
}
