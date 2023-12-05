import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationDecisionSchoolServiceBase } from "./base/applicationDecisionSchool.service.base";

@Injectable()
export class ApplicationDecisionSchoolService extends ApplicationDecisionSchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
