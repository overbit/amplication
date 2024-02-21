/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DatafileType as PrismaDatafileType } from "@prisma/client";

export class DatafileTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DatafileTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeCountArgs>
  ): Promise<number> {
    return this.prisma.datafileType.count(args);
  }

  async datafileTypes<T extends Prisma.DatafileTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeFindManyArgs>
  ): Promise<PrismaDatafileType[]> {
    return this.prisma.datafileType.findMany(args);
  }
  async datafileType<T extends Prisma.DatafileTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeFindUniqueArgs>
  ): Promise<PrismaDatafileType | null> {
    return this.prisma.datafileType.findUnique(args);
  }
  async createDatafileType<T extends Prisma.DatafileTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeCreateArgs>
  ): Promise<PrismaDatafileType> {
    return this.prisma.datafileType.create<T>(args);
  }
  async updateDatafileType<T extends Prisma.DatafileTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeUpdateArgs>
  ): Promise<PrismaDatafileType> {
    return this.prisma.datafileType.update<T>(args);
  }
  async deleteDatafileType<T extends Prisma.DatafileTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileTypeDeleteArgs>
  ): Promise<PrismaDatafileType> {
    return this.prisma.datafileType.delete(args);
  }
}
