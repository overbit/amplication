import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LanguageAssessmentServiceBase } from "./base/languageAssessment.service.base";

@Injectable()
export class LanguageAssessmentService extends LanguageAssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
