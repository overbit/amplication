import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateAppsMseReviewedServiceBase } from "./base/mitsSlateAppsMseReviewed.service.base";

@Injectable()
export class MitsSlateAppsMseReviewedService extends MitsSlateAppsMseReviewedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
