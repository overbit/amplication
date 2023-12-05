import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuProgramsDepartmentService } from "./luProgramsDepartment.service";
import { LuProgramsDepartmentControllerBase } from "./base/luProgramsDepartment.controller.base";

@swagger.ApiTags("luProgramsDepartments")
@common.Controller("luProgramsDepartments")
export class LuProgramsDepartmentController extends LuProgramsDepartmentControllerBase {
  constructor(protected readonly service: LuProgramsDepartmentService) {
    super(service);
  }
}
