import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Em2SupportingCourseworkService } from "./em2SupportingCoursework.service";
import { Em2SupportingCourseworkControllerBase } from "./base/em2SupportingCoursework.controller.base";

@swagger.ApiTags("em2SupportingCourseworks")
@common.Controller("em2SupportingCourseworks")
export class Em2SupportingCourseworkController extends Em2SupportingCourseworkControllerBase {
  constructor(protected readonly service: Em2SupportingCourseworkService) {
    super(service);
  }
}
