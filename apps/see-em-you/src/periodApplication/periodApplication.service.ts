import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodApplicationServiceBase } from "./base/periodApplication.service.base";

@Injectable()
export class PeriodApplicationService extends PeriodApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
