import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MhciPrereqsReviewerServiceBase } from "./base/mhciPrereqsReviewer.service.base";

@Injectable()
export class MhciPrereqsReviewerService extends MhciPrereqsReviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
