import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniDisciplinaryActionService } from "./iniDisciplinaryAction.service";
import { IniDisciplinaryActionControllerBase } from "./base/iniDisciplinaryAction.controller.base";

@swagger.ApiTags("iniDisciplinaryActions")
@common.Controller("iniDisciplinaryActions")
export class IniDisciplinaryActionController extends IniDisciplinaryActionControllerBase {
  constructor(protected readonly service: IniDisciplinaryActionService) {
    super(service);
  }
}
