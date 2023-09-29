import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemPreviousCourseServiceBase } from "./base/semPreviousCourse.service.base";

@Injectable()
export class SemPreviousCourseService extends SemPreviousCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
