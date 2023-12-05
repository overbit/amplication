import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";
import { LuProgramsApplicationreqControllerBase } from "./base/luProgramsApplicationreq.controller.base";

@swagger.ApiTags("luProgramsApplicationreqs")
@common.Controller("luProgramsApplicationreqs")
export class LuProgramsApplicationreqController extends LuProgramsApplicationreqControllerBase {
  constructor(protected readonly service: LuProgramsApplicationreqService) {
    super(service);
  }
}
