import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateReviewServiceBase } from "./base/mitsSlateReview.service.base";

@Injectable()
export class MitsSlateReviewService extends MitsSlateReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
