import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";
import { IniSupportingCourseworkControllerBase } from "./base/iniSupportingCoursework.controller.base";

@swagger.ApiTags("iniSupportingCourseworks")
@common.Controller("iniSupportingCourseworks")
export class IniSupportingCourseworkController extends IniSupportingCourseworkControllerBase {
  constructor(protected readonly service: IniSupportingCourseworkService) {
    super(service);
  }
}
