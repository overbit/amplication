import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramService } from "./program.service";
import { ProgramControllerBase } from "./base/program.controller.base";

@swagger.ApiTags("programs")
@common.Controller("programs")
export class ProgramController extends ProgramControllerBase {
  constructor(protected readonly service: ProgramService) {
    super(service);
  }
}
