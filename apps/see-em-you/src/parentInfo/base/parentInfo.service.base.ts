/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ParentInfo as PrismaParentInfo } from "@prisma/client";

export class ParentInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ParentInfoCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoCountArgs>
  ): Promise<number> {
    return this.prisma.parentInfo.count(args);
  }

  async parentInfos<T extends Prisma.ParentInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoFindManyArgs>
  ): Promise<PrismaParentInfo[]> {
    return this.prisma.parentInfo.findMany(args);
  }
  async parentInfo<T extends Prisma.ParentInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoFindUniqueArgs>
  ): Promise<PrismaParentInfo | null> {
    return this.prisma.parentInfo.findUnique(args);
  }
  async createParentInfo<T extends Prisma.ParentInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoCreateArgs>
  ): Promise<PrismaParentInfo> {
    return this.prisma.parentInfo.create<T>(args);
  }
  async updateParentInfo<T extends Prisma.ParentInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoUpdateArgs>
  ): Promise<PrismaParentInfo> {
    return this.prisma.parentInfo.update<T>(args);
  }
  async deleteParentInfo<T extends Prisma.ParentInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentInfoDeleteArgs>
  ): Promise<PrismaParentInfo> {
    return this.prisma.parentInfo.delete(args);
  }
}
