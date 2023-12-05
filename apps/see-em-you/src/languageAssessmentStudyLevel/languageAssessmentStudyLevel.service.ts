import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LanguageAssessmentStudyLevelServiceBase } from "./base/languageAssessmentStudyLevel.service.base";

@Injectable()
export class LanguageAssessmentStudyLevelService extends LanguageAssessmentStudyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
