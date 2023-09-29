import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";
import { DepartmentReplyperiodControllerBase } from "./base/departmentReplyperiod.controller.base";

@swagger.ApiTags("departmentReplyperiods")
@common.Controller("departmentReplyperiods")
export class DepartmentReplyperiodController extends DepartmentReplyperiodControllerBase {
  constructor(protected readonly service: DepartmentReplyperiodService) {
    super(service);
  }
}
