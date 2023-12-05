import { Module } from "@nestjs/common";
import { AttendanceStatusModuleBase } from "./base/attendanceStatus.module.base";
import { AttendanceStatusService } from "./attendanceStatus.service";
import { AttendanceStatusController } from "./attendanceStatus.controller";
import { AttendanceStatusResolver } from "./attendanceStatus.resolver";

@Module({
  imports: [AttendanceStatusModuleBase],
  controllers: [AttendanceStatusController],
  providers: [AttendanceStatusService, AttendanceStatusResolver],
  exports: [AttendanceStatusService],
})
export class AttendanceStatusModule {}
