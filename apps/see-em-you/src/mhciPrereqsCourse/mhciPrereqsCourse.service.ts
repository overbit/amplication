import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsCourseServiceBase } from "./base/mhciPrereqsCourse.service.base";

@Injectable()
export class MhciPrereqsCourseService extends MhciPrereqsCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
