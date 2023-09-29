import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LangProfRecommendServiceBase } from "./base/langProfRecommend.service.base";

@Injectable()
export class LangProfRecommendService extends LangProfRecommendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
