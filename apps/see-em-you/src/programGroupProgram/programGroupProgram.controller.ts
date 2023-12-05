import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramGroupProgramService } from "./programGroupProgram.service";
import { ProgramGroupProgramControllerBase } from "./base/programGroupProgram.controller.base";

@swagger.ApiTags("programGroupPrograms")
@common.Controller("programGroupPrograms")
export class ProgramGroupProgramController extends ProgramGroupProgramControllerBase {
  constructor(protected readonly service: ProgramGroupProgramService) {
    super(service);
  }
}
