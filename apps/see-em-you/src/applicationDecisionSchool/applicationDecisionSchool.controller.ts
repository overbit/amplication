import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";
import { ApplicationDecisionSchoolControllerBase } from "./base/applicationDecisionSchool.controller.base";

@swagger.ApiTags("applicationDecisionSchools")
@common.Controller("applicationDecisionSchools")
export class ApplicationDecisionSchoolController extends ApplicationDecisionSchoolControllerBase {
  constructor(protected readonly service: ApplicationDecisionSchoolService) {
    super(service);
  }
}
