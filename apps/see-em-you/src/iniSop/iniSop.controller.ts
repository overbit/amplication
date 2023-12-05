import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniSopService } from "./iniSop.service";
import { IniSopControllerBase } from "./base/iniSop.controller.base";

@swagger.ApiTags("iniSops")
@common.Controller("iniSops")
export class IniSopController extends IniSopControllerBase {
  constructor(protected readonly service: IniSopService) {
    super(service);
  }
}
