import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeriodProgramService } from "./periodProgram.service";
import { PeriodProgramControllerBase } from "./base/periodProgram.controller.base";

@swagger.ApiTags("periodPrograms")
@common.Controller("periodPrograms")
export class PeriodProgramController extends PeriodProgramControllerBase {
  constructor(protected readonly service: PeriodProgramService) {
    super(service);
  }
}
