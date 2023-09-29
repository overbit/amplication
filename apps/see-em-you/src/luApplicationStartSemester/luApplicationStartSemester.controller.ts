import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";
import { LuApplicationStartSemesterControllerBase } from "./base/luApplicationStartSemester.controller.base";

@swagger.ApiTags("luApplicationStartSemesters")
@common.Controller("luApplicationStartSemesters")
export class LuApplicationStartSemesterController extends LuApplicationStartSemesterControllerBase {
  constructor(protected readonly service: LuApplicationStartSemesterService) {
    super(service);
  }
}
