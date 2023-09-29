/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MitsSlateRecommend3 } from "@prisma/client";

export class MitsSlateRecommend3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MitsSlateRecommend3CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3CountArgs>
  ): Promise<number> {
    return this.prisma.mitsSlateRecommend3.count(args);
  }

  async findMany<T extends Prisma.MitsSlateRecommend3FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3FindManyArgs>
  ): Promise<MitsSlateRecommend3[]> {
    return this.prisma.mitsSlateRecommend3.findMany(args);
  }
  async findOne<T extends Prisma.MitsSlateRecommend3FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3FindUniqueArgs>
  ): Promise<MitsSlateRecommend3 | null> {
    return this.prisma.mitsSlateRecommend3.findUnique(args);
  }
  async create<T extends Prisma.MitsSlateRecommend3CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3CreateArgs>
  ): Promise<MitsSlateRecommend3> {
    return this.prisma.mitsSlateRecommend3.create<T>(args);
  }
  async update<T extends Prisma.MitsSlateRecommend3UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3UpdateArgs>
  ): Promise<MitsSlateRecommend3> {
    return this.prisma.mitsSlateRecommend3.update<T>(args);
  }
  async delete<T extends Prisma.MitsSlateRecommend3DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateRecommend3DeleteArgs>
  ): Promise<MitsSlateRecommend3> {
    return this.prisma.mitsSlateRecommend3.delete(args);
  }
}
