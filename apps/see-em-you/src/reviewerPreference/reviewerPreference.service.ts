import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewerPreferenceServiceBase } from "./base/reviewerPreference.service.base";

@Injectable()
export class ReviewerPreferenceService extends ReviewerPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
