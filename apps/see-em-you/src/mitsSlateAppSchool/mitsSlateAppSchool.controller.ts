import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateAppSchoolService } from "./mitsSlateAppSchool.service";
import { MitsSlateAppSchoolControllerBase } from "./base/mitsSlateAppSchool.controller.base";

@swagger.ApiTags("mitsSlateAppSchools")
@common.Controller("mitsSlateAppSchools")
export class MitsSlateAppSchoolController extends MitsSlateAppSchoolControllerBase {
  constructor(protected readonly service: MitsSlateAppSchoolService) {
    super(service);
  }
}
