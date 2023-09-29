import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramsUnitService } from "./programsUnit.service";
import { ProgramsUnitControllerBase } from "./base/programsUnit.controller.base";

@swagger.ApiTags("programsUnits")
@common.Controller("programsUnits")
export class ProgramsUnitController extends ProgramsUnitControllerBase {
  constructor(protected readonly service: ProgramsUnitService) {
    super(service);
  }
}
