import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewRiskFactorServiceBase } from "./base/reviewRiskFactor.service.base";

@Injectable()
export class ReviewRiskFactorService extends ReviewRiskFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
