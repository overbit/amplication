import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionHistoryCopyServiceBase } from "./base/promotionHistoryCopy.service.base";

@Injectable()
export class PromotionHistoryCopyService extends PromotionHistoryCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
