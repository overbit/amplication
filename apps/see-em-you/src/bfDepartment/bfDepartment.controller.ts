import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BfDepartmentService } from "./bfDepartment.service";
import { BfDepartmentControllerBase } from "./base/bfDepartment.controller.base";

@swagger.ApiTags("bfDepartments")
@common.Controller("bfDepartments")
export class BfDepartmentController extends BfDepartmentControllerBase {
  constructor(protected readonly service: BfDepartmentService) {
    super(service);
  }
}
