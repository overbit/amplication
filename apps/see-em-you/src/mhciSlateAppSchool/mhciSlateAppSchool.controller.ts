import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";
import { MhciSlateAppSchoolControllerBase } from "./base/mhciSlateAppSchool.controller.base";

@swagger.ApiTags("mhciSlateAppSchools")
@common.Controller("mhciSlateAppSchools")
export class MhciSlateAppSchoolController extends MhciSlateAppSchoolControllerBase {
  constructor(protected readonly service: MhciSlateAppSchoolService) {
    super(service);
  }
}
