/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MitsSlateReview } from "@prisma/client";

export class MitsSlateReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MitsSlateReviewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewCountArgs>
  ): Promise<number> {
    return this.prisma.mitsSlateReview.count(args);
  }

  async findMany<T extends Prisma.MitsSlateReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewFindManyArgs>
  ): Promise<MitsSlateReview[]> {
    return this.prisma.mitsSlateReview.findMany(args);
  }
  async findOne<T extends Prisma.MitsSlateReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewFindUniqueArgs>
  ): Promise<MitsSlateReview | null> {
    return this.prisma.mitsSlateReview.findUnique(args);
  }
  async create<T extends Prisma.MitsSlateReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewCreateArgs>
  ): Promise<MitsSlateReview> {
    return this.prisma.mitsSlateReview.create<T>(args);
  }
  async update<T extends Prisma.MitsSlateReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewUpdateArgs>
  ): Promise<MitsSlateReview> {
    return this.prisma.mitsSlateReview.update<T>(args);
  }
  async delete<T extends Prisma.MitsSlateReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateReviewDeleteArgs>
  ): Promise<MitsSlateReview> {
    return this.prisma.mitsSlateReview.delete(args);
  }
}
