import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateRecommend1ServiceBase } from "./base/mitsSlateRecommend1.service.base";

@Injectable()
export class MitsSlateRecommend1Service extends MitsSlateRecommend1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
