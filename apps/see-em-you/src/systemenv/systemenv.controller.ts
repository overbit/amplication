import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemenvService } from "./systemenv.service";
import { SystemenvControllerBase } from "./base/systemenv.controller.base";

@swagger.ApiTags("systemenvs")
@common.Controller("systemenvs")
export class SystemenvController extends SystemenvControllerBase {
  constructor(protected readonly service: SystemenvService) {
    super(service);
  }
}
