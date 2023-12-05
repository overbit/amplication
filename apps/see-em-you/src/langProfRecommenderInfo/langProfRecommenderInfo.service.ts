import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LangProfRecommenderInfoServiceBase } from "./base/langProfRecommenderInfo.service.base";

@Injectable()
export class LangProfRecommenderInfoService extends LangProfRecommenderInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
