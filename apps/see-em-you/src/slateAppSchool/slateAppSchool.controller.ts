import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateAppSchoolService } from "./slateAppSchool.service";
import { SlateAppSchoolControllerBase } from "./base/slateAppSchool.controller.base";

@swagger.ApiTags("slateAppSchools")
@common.Controller("slateAppSchools")
export class SlateAppSchoolController extends SlateAppSchoolControllerBase {
  constructor(protected readonly service: SlateAppSchoolService) {
    super(service);
  }
}
