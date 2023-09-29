import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LanguageAssessmentRatingServiceBase } from "./base/languageAssessmentRating.service.base";

@Injectable()
export class LanguageAssessmentRatingService extends LanguageAssessmentRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
