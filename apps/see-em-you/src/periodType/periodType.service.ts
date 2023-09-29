import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodTypeServiceBase } from "./base/periodType.service.base";

@Injectable()
export class PeriodTypeService extends PeriodTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
