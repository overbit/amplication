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
  GroupRankComment as PrismaGroupRankComment,
} from "@prisma/client";

export class GroupRankCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GroupRankCommentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentCountArgs>
  ): Promise<number> {
    return this.prisma.groupRankComment.count(args);
  }

  async groupRankComments<T extends Prisma.GroupRankCommentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentFindManyArgs>
  ): Promise<PrismaGroupRankComment[]> {
    return this.prisma.groupRankComment.findMany(args);
  }
  async groupRankComment<T extends Prisma.GroupRankCommentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentFindUniqueArgs>
  ): Promise<PrismaGroupRankComment | null> {
    return this.prisma.groupRankComment.findUnique(args);
  }
  async createGroupRankComment<T extends Prisma.GroupRankCommentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentCreateArgs>
  ): Promise<PrismaGroupRankComment> {
    return this.prisma.groupRankComment.create<T>(args);
  }
  async updateGroupRankComment<T extends Prisma.GroupRankCommentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentUpdateArgs>
  ): Promise<PrismaGroupRankComment> {
    return this.prisma.groupRankComment.update<T>(args);
  }
  async deleteGroupRankComment<T extends Prisma.GroupRankCommentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupRankCommentDeleteArgs>
  ): Promise<PrismaGroupRankComment> {
    return this.prisma.groupRankComment.delete(args);
  }
}
