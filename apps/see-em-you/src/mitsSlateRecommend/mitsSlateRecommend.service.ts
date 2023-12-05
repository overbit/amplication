import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateRecommendServiceBase } from "./base/mitsSlateRecommend.service.base";

@Injectable()
export class MitsSlateRecommendService extends MitsSlateRecommendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
