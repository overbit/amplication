import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewRiskFactorOtherServiceBase } from "./base/reviewRiskFactorOther.service.base";

@Injectable()
export class ReviewRiskFactorOtherService extends ReviewRiskFactorOtherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
