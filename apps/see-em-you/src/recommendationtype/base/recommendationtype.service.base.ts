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
  Recommendationtype as PrismaRecommendationtype,
} from "@prisma/client";

export class RecommendationtypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RecommendationtypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeCountArgs>
  ): Promise<number> {
    return this.prisma.recommendationtype.count(args);
  }

  async recommendationtypes<T extends Prisma.RecommendationtypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeFindManyArgs>
  ): Promise<PrismaRecommendationtype[]> {
    return this.prisma.recommendationtype.findMany(args);
  }
  async recommendationtype<T extends Prisma.RecommendationtypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeFindUniqueArgs>
  ): Promise<PrismaRecommendationtype | null> {
    return this.prisma.recommendationtype.findUnique(args);
  }
  async createRecommendationtype<T extends Prisma.RecommendationtypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeCreateArgs>
  ): Promise<PrismaRecommendationtype> {
    return this.prisma.recommendationtype.create<T>(args);
  }
  async updateRecommendationtype<T extends Prisma.RecommendationtypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeUpdateArgs>
  ): Promise<PrismaRecommendationtype> {
    return this.prisma.recommendationtype.update<T>(args);
  }
  async deleteRecommendationtype<T extends Prisma.RecommendationtypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecommendationtypeDeleteArgs>
  ): Promise<PrismaRecommendationtype> {
    return this.prisma.recommendationtype.delete(args);
  }
}
