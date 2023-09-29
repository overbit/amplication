import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsCourseDatafileServiceBase } from "./base/mhciPrereqsCourseDatafile.service.base";

@Injectable()
export class MhciPrereqsCourseDatafileService extends MhciPrereqsCourseDatafileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
