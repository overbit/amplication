import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LuProgramsRecommendationServiceBase } from "./base/luProgramsRecommendation.service.base";

@Injectable()
export class LuProgramsRecommendationService extends LuProgramsRecommendationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
