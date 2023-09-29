import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";
import { IniSupportingCourseworkKobeControllerBase } from "./base/iniSupportingCourseworkKobe.controller.base";

@swagger.ApiTags("iniSupportingCourseworkKobes")
@common.Controller("iniSupportingCourseworkKobes")
export class IniSupportingCourseworkKobeController extends IniSupportingCourseworkKobeControllerBase {
  constructor(protected readonly service: IniSupportingCourseworkKobeService) {
    super(service);
  }
}
