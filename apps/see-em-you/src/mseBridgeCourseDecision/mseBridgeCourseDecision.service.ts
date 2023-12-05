import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseBridgeCourseDecisionServiceBase } from "./base/mseBridgeCourseDecision.service.base";

@Injectable()
export class MseBridgeCourseDecisionService extends MseBridgeCourseDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
