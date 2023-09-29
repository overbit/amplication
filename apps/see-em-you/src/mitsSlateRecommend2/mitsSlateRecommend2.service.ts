import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateRecommend2ServiceBase } from "./base/mitsSlateRecommend2.service.base";

@Injectable()
export class MitsSlateRecommend2Service extends MitsSlateRecommend2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
