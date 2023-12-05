/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PeriodType } from "@prisma/client";

export class PeriodTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PeriodTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeCountArgs>
  ): Promise<number> {
    return this.prisma.periodType.count(args);
  }

  async periodTypes<T extends Prisma.PeriodTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeFindManyArgs>
  ): Promise<PeriodType[]> {
    return this.prisma.periodType.findMany(args);
  }
  async periodType<T extends Prisma.PeriodTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeFindUniqueArgs>
  ): Promise<PeriodType | null> {
    return this.prisma.periodType.findUnique(args);
  }
  async createPeriodType<T extends Prisma.PeriodTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeCreateArgs>
  ): Promise<PeriodType> {
    return this.prisma.periodType.create<T>(args);
  }
  async updatePeriodType<T extends Prisma.PeriodTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeUpdateArgs>
  ): Promise<PeriodType> {
    return this.prisma.periodType.update<T>(args);
  }
  async deletePeriodType<T extends Prisma.PeriodTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PeriodTypeDeleteArgs>
  ): Promise<PeriodType> {
    return this.prisma.periodType.delete(args);
  }
}
