import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MseRiskFactorServiceBase } from "./base/mseRiskFactor.service.base";

@Injectable()
export class MseRiskFactorService extends MseRiskFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
