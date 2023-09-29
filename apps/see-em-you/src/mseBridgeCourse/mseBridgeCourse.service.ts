import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseBridgeCourseServiceBase } from "./base/mseBridgeCourse.service.base";

@Injectable()
export class MseBridgeCourseService extends MseBridgeCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
