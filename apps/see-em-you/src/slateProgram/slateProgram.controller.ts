import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateProgramService } from "./slateProgram.service";
import { SlateProgramControllerBase } from "./base/slateProgram.controller.base";

@swagger.ApiTags("slatePrograms")
@common.Controller("slatePrograms")
export class SlateProgramController extends SlateProgramControllerBase {
  constructor(protected readonly service: SlateProgramService) {
    super(service);
  }
}
