import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnitPeriodServiceBase } from "./base/unitPeriod.service.base";

@Injectable()
export class UnitPeriodService extends UnitPeriodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
