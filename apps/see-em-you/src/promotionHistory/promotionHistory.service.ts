import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionHistoryServiceBase } from "./base/promotionHistory.service.base";

@Injectable()
export class PromotionHistoryService extends PromotionHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
