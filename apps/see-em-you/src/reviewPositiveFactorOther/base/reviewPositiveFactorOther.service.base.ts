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
  ReviewPositiveFactorOther as PrismaReviewPositiveFactorOther,
} from "@prisma/client";

export class ReviewPositiveFactorOtherServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReviewPositiveFactorOtherCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherCountArgs>
  ): Promise<number> {
    return this.prisma.reviewPositiveFactorOther.count(args);
  }

  async reviewPositiveFactorOthers<
    T extends Prisma.ReviewPositiveFactorOtherFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherFindManyArgs>
  ): Promise<PrismaReviewPositiveFactorOther[]> {
    return this.prisma.reviewPositiveFactorOther.findMany(args);
  }
  async reviewPositiveFactorOther<
    T extends Prisma.ReviewPositiveFactorOtherFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherFindUniqueArgs>
  ): Promise<PrismaReviewPositiveFactorOther | null> {
    return this.prisma.reviewPositiveFactorOther.findUnique(args);
  }
  async createReviewPositiveFactorOther<
    T extends Prisma.ReviewPositiveFactorOtherCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherCreateArgs>
  ): Promise<PrismaReviewPositiveFactorOther> {
    return this.prisma.reviewPositiveFactorOther.create<T>(args);
  }
  async updateReviewPositiveFactorOther<
    T extends Prisma.ReviewPositiveFactorOtherUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherUpdateArgs>
  ): Promise<PrismaReviewPositiveFactorOther> {
    return this.prisma.reviewPositiveFactorOther.update<T>(args);
  }
  async deleteReviewPositiveFactorOther<
    T extends Prisma.ReviewPositiveFactorOtherDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ReviewPositiveFactorOtherDeleteArgs>
  ): Promise<PrismaReviewPositiveFactorOther> {
    return this.prisma.reviewPositiveFactorOther.delete(args);
  }
}
