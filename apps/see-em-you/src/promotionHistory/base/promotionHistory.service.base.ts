/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PromotionHistory as PrismaPromotionHistory,
  Application as PrismaApplication,
} from "@prisma/client";

export class PromotionHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PromotionHistoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCountArgs>
  ): Promise<number> {
    return this.prisma.promotionHistory.count(args);
  }

  async promotionHistories<T extends Prisma.PromotionHistoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryFindManyArgs>
  ): Promise<PrismaPromotionHistory[]> {
    return this.prisma.promotionHistory.findMany(args);
  }
  async promotionHistory<T extends Prisma.PromotionHistoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryFindUniqueArgs>
  ): Promise<PrismaPromotionHistory | null> {
    return this.prisma.promotionHistory.findUnique(args);
  }
  async createPromotionHistory<T extends Prisma.PromotionHistoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCreateArgs>
  ): Promise<PrismaPromotionHistory> {
    return this.prisma.promotionHistory.create<T>(args);
  }
  async updatePromotionHistory<T extends Prisma.PromotionHistoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryUpdateArgs>
  ): Promise<PrismaPromotionHistory> {
    return this.prisma.promotionHistory.update<T>(args);
  }
  async deletePromotionHistory<T extends Prisma.PromotionHistoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryDeleteArgs>
  ): Promise<PrismaPromotionHistory> {
    return this.prisma.promotionHistory.delete(args);
  }

  async getApplication(parentId: string): Promise<PrismaApplication | null> {
    return this.prisma.promotionHistory
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
