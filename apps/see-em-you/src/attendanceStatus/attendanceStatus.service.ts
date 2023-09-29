import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttendanceStatusServiceBase } from "./base/attendanceStatus.service.base";

@Injectable()
export class AttendanceStatusService extends AttendanceStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
