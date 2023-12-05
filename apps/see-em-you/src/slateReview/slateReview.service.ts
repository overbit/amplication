import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateReviewServiceBase } from "./base/slateReview.service.base";

@Injectable()
export class SlateReviewService extends SlateReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
