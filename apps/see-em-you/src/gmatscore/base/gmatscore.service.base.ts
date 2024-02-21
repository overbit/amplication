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
  Gmatscore as PrismaGmatscore,
  Application as PrismaApplication,
} from "@prisma/client";

export class GmatscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GmatscoreCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreCountArgs>
  ): Promise<number> {
    return this.prisma.gmatscore.count(args);
  }

  async gmatscores<T extends Prisma.GmatscoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreFindManyArgs>
  ): Promise<PrismaGmatscore[]> {
    return this.prisma.gmatscore.findMany(args);
  }
  async gmatscore<T extends Prisma.GmatscoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreFindUniqueArgs>
  ): Promise<PrismaGmatscore | null> {
    return this.prisma.gmatscore.findUnique(args);
  }
  async createGmatscore<T extends Prisma.GmatscoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreCreateArgs>
  ): Promise<PrismaGmatscore> {
    return this.prisma.gmatscore.create<T>(args);
  }
  async updateGmatscore<T extends Prisma.GmatscoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreUpdateArgs>
  ): Promise<PrismaGmatscore> {
    return this.prisma.gmatscore.update<T>(args);
  }
  async deleteGmatscore<T extends Prisma.GmatscoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreDeleteArgs>
  ): Promise<PrismaGmatscore> {
    return this.prisma.gmatscore.delete(args);
  }

  async getApplication(parentId: number): Promise<PrismaApplication | null> {
    return this.prisma.gmatscore
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
