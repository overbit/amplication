import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SchoolService } from "./school.service";
import { SchoolControllerBase } from "./base/school.controller.base";

@swagger.ApiTags("schools")
@common.Controller("schools")
export class SchoolController extends SchoolControllerBase {
  constructor(protected readonly service: SchoolService) {
    super(service);
  }
}
