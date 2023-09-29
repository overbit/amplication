import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlacklistReviewerServiceBase } from "./base/blacklistReviewer.service.base";

@Injectable()
export class BlacklistReviewerService extends BlacklistReviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
