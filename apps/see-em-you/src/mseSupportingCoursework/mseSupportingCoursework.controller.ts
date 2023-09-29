import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";
import { MseSupportingCourseworkControllerBase } from "./base/mseSupportingCoursework.controller.base";

@swagger.ApiTags("mseSupportingCourseworks")
@common.Controller("mseSupportingCourseworks")
export class MseSupportingCourseworkController extends MseSupportingCourseworkControllerBase {
  constructor(protected readonly service: MseSupportingCourseworkService) {
    super(service);
  }
}
