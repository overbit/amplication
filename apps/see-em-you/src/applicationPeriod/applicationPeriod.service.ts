import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationPeriodServiceBase } from "./base/applicationPeriod.service.base";

@Injectable()
export class ApplicationPeriodService extends ApplicationPeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
