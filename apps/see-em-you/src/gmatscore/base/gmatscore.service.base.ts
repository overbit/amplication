/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Gmatscore, Application } from "@prisma/client";

export class GmatscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GmatscoreCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreCountArgs>
  ): Promise<number> {
    return this.prisma.gmatscore.count(args);
  }

  async findMany<T extends Prisma.GmatscoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreFindManyArgs>
  ): Promise<Gmatscore[]> {
    return this.prisma.gmatscore.findMany(args);
  }
  async findOne<T extends Prisma.GmatscoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreFindUniqueArgs>
  ): Promise<Gmatscore | null> {
    return this.prisma.gmatscore.findUnique(args);
  }
  async create<T extends Prisma.GmatscoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreCreateArgs>
  ): Promise<Gmatscore> {
    return this.prisma.gmatscore.create<T>(args);
  }
  async update<T extends Prisma.GmatscoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreUpdateArgs>
  ): Promise<Gmatscore> {
    return this.prisma.gmatscore.update<T>(args);
  }
  async delete<T extends Prisma.GmatscoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GmatscoreDeleteArgs>
  ): Promise<Gmatscore> {
    return this.prisma.gmatscore.delete(args);
  }

  async getApplication(parentId: number): Promise<Application | null> {
    return this.prisma.gmatscore
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
