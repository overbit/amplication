import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsCourseService } from "./mhciPrereqsCourse.service";
import { MhciPrereqsCourseControllerBase } from "./base/mhciPrereqsCourse.controller.base";

@swagger.ApiTags("mhciPrereqsCourses")
@common.Controller("mhciPrereqsCourses")
export class MhciPrereqsCourseController extends MhciPrereqsCourseControllerBase {
  constructor(protected readonly service: MhciPrereqsCourseService) {
    super(service);
  }
}
