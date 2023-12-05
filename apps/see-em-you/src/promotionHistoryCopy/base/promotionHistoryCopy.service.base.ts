/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PromotionHistoryCopy } from "@prisma/client";

export class PromotionHistoryCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PromotionHistoryCopyCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyCountArgs>
  ): Promise<number> {
    return this.prisma.promotionHistoryCopy.count(args);
  }

  async promotionHistoryCopies<
    T extends Prisma.PromotionHistoryCopyFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyFindManyArgs>
  ): Promise<PromotionHistoryCopy[]> {
    return this.prisma.promotionHistoryCopy.findMany(args);
  }
  async promotionHistoryCopy<
    T extends Prisma.PromotionHistoryCopyFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyFindUniqueArgs>
  ): Promise<PromotionHistoryCopy | null> {
    return this.prisma.promotionHistoryCopy.findUnique(args);
  }
  async createPromotionHistoryCopy<
    T extends Prisma.PromotionHistoryCopyCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyCreateArgs>
  ): Promise<PromotionHistoryCopy> {
    return this.prisma.promotionHistoryCopy.create<T>(args);
  }
  async updatePromotionHistoryCopy<
    T extends Prisma.PromotionHistoryCopyUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyUpdateArgs>
  ): Promise<PromotionHistoryCopy> {
    return this.prisma.promotionHistoryCopy.update<T>(args);
  }
  async deletePromotionHistoryCopy<
    T extends Prisma.PromotionHistoryCopyDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.PromotionHistoryCopyDeleteArgs>
  ): Promise<PromotionHistoryCopy> {
    return this.prisma.promotionHistoryCopy.delete(args);
  }
}
