import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";
import { ProgramsApplicationreqControllerBase } from "./base/programsApplicationreq.controller.base";

@swagger.ApiTags("programsApplicationreqs")
@common.Controller("programsApplicationreqs")
export class ProgramsApplicationreqController extends ProgramsApplicationreqControllerBase {
  constructor(protected readonly service: ProgramsApplicationreqService) {
    super(service);
  }
}
