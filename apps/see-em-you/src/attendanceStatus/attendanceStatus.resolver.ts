import * as graphql from "@nestjs/graphql";
import { AttendanceStatusResolverBase } from "./base/attendanceStatus.resolver.base";
import { AttendanceStatus } from "./base/AttendanceStatus";
import { AttendanceStatusService } from "./attendanceStatus.service";

@graphql.Resolver(() => AttendanceStatus)
export class AttendanceStatusResolver extends AttendanceStatusResolverBase {
  constructor(protected readonly service: AttendanceStatusService) {
    super(service);
  }
}
