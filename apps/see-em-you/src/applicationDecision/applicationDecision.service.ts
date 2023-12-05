import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationDecisionServiceBase } from "./base/applicationDecision.service.base";

@Injectable()
export class ApplicationDecisionService extends ApplicationDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
