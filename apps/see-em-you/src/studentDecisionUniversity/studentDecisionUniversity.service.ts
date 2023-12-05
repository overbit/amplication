import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDecisionUniversityServiceBase } from "./base/studentDecisionUniversity.service.base";

@Injectable()
export class StudentDecisionUniversityService extends StudentDecisionUniversityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
