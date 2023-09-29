/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BlacklistReviewer } from "@prisma/client";

export class BlacklistReviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BlacklistReviewerCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerCountArgs>
  ): Promise<number> {
    return this.prisma.blacklistReviewer.count(args);
  }

  async findMany<T extends Prisma.BlacklistReviewerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerFindManyArgs>
  ): Promise<BlacklistReviewer[]> {
    return this.prisma.blacklistReviewer.findMany(args);
  }
  async findOne<T extends Prisma.BlacklistReviewerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerFindUniqueArgs>
  ): Promise<BlacklistReviewer | null> {
    return this.prisma.blacklistReviewer.findUnique(args);
  }
  async create<T extends Prisma.BlacklistReviewerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerCreateArgs>
  ): Promise<BlacklistReviewer> {
    return this.prisma.blacklistReviewer.create<T>(args);
  }
  async update<T extends Prisma.BlacklistReviewerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerUpdateArgs>
  ): Promise<BlacklistReviewer> {
    return this.prisma.blacklistReviewer.update<T>(args);
  }
  async delete<T extends Prisma.BlacklistReviewerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlacklistReviewerDeleteArgs>
  ): Promise<BlacklistReviewer> {
    return this.prisma.blacklistReviewer.delete(args);
  }
}
