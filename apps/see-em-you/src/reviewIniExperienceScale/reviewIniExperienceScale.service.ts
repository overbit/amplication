import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewIniExperienceScaleServiceBase } from "./base/reviewIniExperienceScale.service.base";

@Injectable()
export class ReviewIniExperienceScaleService extends ReviewIniExperienceScaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
