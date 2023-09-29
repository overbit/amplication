import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodServiceBase } from "./base/period.service.base";

@Injectable()
export class PeriodService extends PeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
