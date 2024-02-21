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
  Recommend as PrismaRecommend,
  Application as PrismaApplication,
} from "@prisma/client";

export class RecommendServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RecommendCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendCountArgs>
  ): Promise<number> {
    return this.prisma.recommend.count(args);
  }

  async recommends<T extends Prisma.RecommendFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendFindManyArgs>
  ): Promise<PrismaRecommend[]> {
    return this.prisma.recommend.findMany(args);
  }
  async recommend<T extends Prisma.RecommendFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendFindUniqueArgs>
  ): Promise<PrismaRecommend | null> {
    return this.prisma.recommend.findUnique(args);
  }
  async createRecommend<T extends Prisma.RecommendCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendCreateArgs>
  ): Promise<PrismaRecommend> {
    return this.prisma.recommend.create<T>(args);
  }
  async updateRecommend<T extends Prisma.RecommendUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendUpdateArgs>
  ): Promise<PrismaRecommend> {
    return this.prisma.recommend.update<T>(args);
  }
  async deleteRecommend<T extends Prisma.RecommendDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendDeleteArgs>
  ): Promise<PrismaRecommend> {
    return this.prisma.recommend.delete(args);
  }

  async getApplication(parentId: number): Promise<PrismaApplication | null> {
    return this.prisma.recommend
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
