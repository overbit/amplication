/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Gresubjectscore, Application } from "@prisma/client";

export class GresubjectscoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GresubjectscoreCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreCountArgs>
  ): Promise<number> {
    return this.prisma.gresubjectscore.count(args);
  }

  async findMany<T extends Prisma.GresubjectscoreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreFindManyArgs>
  ): Promise<Gresubjectscore[]> {
    return this.prisma.gresubjectscore.findMany(args);
  }
  async findOne<T extends Prisma.GresubjectscoreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreFindUniqueArgs>
  ): Promise<Gresubjectscore | null> {
    return this.prisma.gresubjectscore.findUnique(args);
  }
  async create<T extends Prisma.GresubjectscoreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreCreateArgs>
  ): Promise<Gresubjectscore> {
    return this.prisma.gresubjectscore.create<T>(args);
  }
  async update<T extends Prisma.GresubjectscoreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreUpdateArgs>
  ): Promise<Gresubjectscore> {
    return this.prisma.gresubjectscore.update<T>(args);
  }
  async delete<T extends Prisma.GresubjectscoreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GresubjectscoreDeleteArgs>
  ): Promise<Gresubjectscore> {
    return this.prisma.gresubjectscore.delete(args);
  }

  async getApplication(parentId: number): Promise<Application | null> {
    return this.prisma.gresubjectscore
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
