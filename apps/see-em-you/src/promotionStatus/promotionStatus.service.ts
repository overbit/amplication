import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionStatusServiceBase } from "./base/promotionStatus.service.base";

@Injectable()
export class PromotionStatusService extends PromotionStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
