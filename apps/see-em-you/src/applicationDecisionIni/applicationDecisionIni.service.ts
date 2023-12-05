import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationDecisionIniServiceBase } from "./base/applicationDecisionIni.service.base";

@Injectable()
export class ApplicationDecisionIniService extends ApplicationDecisionIniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
