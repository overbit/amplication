import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttendanceStatusService } from "./attendanceStatus.service";
import { AttendanceStatusControllerBase } from "./base/attendanceStatus.controller.base";

@swagger.ApiTags("attendanceStatuses")
@common.Controller("attendanceStatuses")
export class AttendanceStatusController extends AttendanceStatusControllerBase {
  constructor(protected readonly service: AttendanceStatusService) {
    super(service);
  }
}
