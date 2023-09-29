/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PeriodApplication, Application, Period } from "@prisma/client";

export class PeriodApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PeriodApplicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationCountArgs>
  ): Promise<number> {
    return this.prisma.periodApplication.count(args);
  }

  async findMany<T extends Prisma.PeriodApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationFindManyArgs>
  ): Promise<PeriodApplication[]> {
    return this.prisma.periodApplication.findMany(args);
  }
  async findOne<T extends Prisma.PeriodApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationFindUniqueArgs>
  ): Promise<PeriodApplication | null> {
    return this.prisma.periodApplication.findUnique(args);
  }
  async create<T extends Prisma.PeriodApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationCreateArgs>
  ): Promise<PeriodApplication> {
    return this.prisma.periodApplication.create<T>(args);
  }
  async update<T extends Prisma.PeriodApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationUpdateArgs>
  ): Promise<PeriodApplication> {
    return this.prisma.periodApplication.update<T>(args);
  }
  async delete<T extends Prisma.PeriodApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodApplicationDeleteArgs>
  ): Promise<PeriodApplication> {
    return this.prisma.periodApplication.delete(args);
  }

  async getApplication(parentId: number): Promise<Application | null> {
    return this.prisma.periodApplication
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }

  async getPeriod(parentId: number): Promise<Period | null> {
    return this.prisma.periodApplication
      .findUnique({
        where: { id: parentId },
      })
      .period();
  }
}
