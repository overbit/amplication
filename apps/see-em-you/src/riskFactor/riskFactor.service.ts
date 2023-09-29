import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RiskFactorServiceBase } from "./base/riskFactor.service.base";

@Injectable()
export class RiskFactorService extends RiskFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
