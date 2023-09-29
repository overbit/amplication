import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDecisionServiceBase } from "./base/studentDecision.service.base";

@Injectable()
export class StudentDecisionService extends StudentDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
