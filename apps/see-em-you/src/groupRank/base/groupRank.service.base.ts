/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GroupRank } from "@prisma/client";

export class GroupRankServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GroupRankCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCountArgs>
  ): Promise<number> {
    return this.prisma.groupRank.count(args);
  }

  async findMany<T extends Prisma.GroupRankFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankFindManyArgs>
  ): Promise<GroupRank[]> {
    return this.prisma.groupRank.findMany(args);
  }
  async findOne<T extends Prisma.GroupRankFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankFindUniqueArgs>
  ): Promise<GroupRank | null> {
    return this.prisma.groupRank.findUnique(args);
  }
  async create<T extends Prisma.GroupRankCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCreateArgs>
  ): Promise<GroupRank> {
    return this.prisma.groupRank.create<T>(args);
  }
  async update<T extends Prisma.GroupRankUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankUpdateArgs>
  ): Promise<GroupRank> {
    return this.prisma.groupRank.update<T>(args);
  }
  async delete<T extends Prisma.GroupRankDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankDeleteArgs>
  ): Promise<GroupRank> {
    return this.prisma.groupRank.delete(args);
  }
}
