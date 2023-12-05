import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationProgramService } from "./luApplicationProgram.service";
import { LuApplicationProgramControllerBase } from "./base/luApplicationProgram.controller.base";

@swagger.ApiTags("luApplicationPrograms")
@common.Controller("luApplicationPrograms")
export class LuApplicationProgramController extends LuApplicationProgramControllerBase {
  constructor(protected readonly service: LuApplicationProgramService) {
    super(service);
  }
}
