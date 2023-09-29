import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MitsSlateRecommend3ServiceBase } from "./base/mitsSlateRecommend3.service.base";

@Injectable()
export class MitsSlateRecommend3Service extends MitsSlateRecommend3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
