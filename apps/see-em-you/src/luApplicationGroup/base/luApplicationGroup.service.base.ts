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
  LuApplicationGroup as PrismaLuApplicationGroup,
  Application as PrismaApplication,
} from "@prisma/client";

export class LuApplicationGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LuApplicationGroupCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupCountArgs>
  ): Promise<number> {
    return this.prisma.luApplicationGroup.count(args);
  }

  async luApplicationGroups<T extends Prisma.LuApplicationGroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupFindManyArgs>
  ): Promise<PrismaLuApplicationGroup[]> {
    return this.prisma.luApplicationGroup.findMany(args);
  }
  async luApplicationGroup<T extends Prisma.LuApplicationGroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupFindUniqueArgs>
  ): Promise<PrismaLuApplicationGroup | null> {
    return this.prisma.luApplicationGroup.findUnique(args);
  }
  async createLuApplicationGroup<T extends Prisma.LuApplicationGroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupCreateArgs>
  ): Promise<PrismaLuApplicationGroup> {
    return this.prisma.luApplicationGroup.create<T>(args);
  }
  async updateLuApplicationGroup<T extends Prisma.LuApplicationGroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupUpdateArgs>
  ): Promise<PrismaLuApplicationGroup> {
    return this.prisma.luApplicationGroup.update<T>(args);
  }
  async deleteLuApplicationGroup<T extends Prisma.LuApplicationGroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuApplicationGroupDeleteArgs>
  ): Promise<PrismaLuApplicationGroup> {
    return this.prisma.luApplicationGroup.delete(args);
  }

  async getApplication(parentId: number): Promise<PrismaApplication | null> {
    return this.prisma.luApplicationGroup
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
