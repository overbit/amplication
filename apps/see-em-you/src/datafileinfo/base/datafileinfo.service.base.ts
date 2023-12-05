/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Datafileinfo } from "@prisma/client";

export class DatafileinfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DatafileinfoCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoCountArgs>
  ): Promise<number> {
    return this.prisma.datafileinfo.count(args);
  }

  async datafileinfos<T extends Prisma.DatafileinfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoFindManyArgs>
  ): Promise<Datafileinfo[]> {
    return this.prisma.datafileinfo.findMany(args);
  }
  async datafileinfo<T extends Prisma.DatafileinfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoFindUniqueArgs>
  ): Promise<Datafileinfo | null> {
    return this.prisma.datafileinfo.findUnique(args);
  }
  async createDatafileinfo<T extends Prisma.DatafileinfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoCreateArgs>
  ): Promise<Datafileinfo> {
    return this.prisma.datafileinfo.create<T>(args);
  }
  async updateDatafileinfo<T extends Prisma.DatafileinfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoUpdateArgs>
  ): Promise<Datafileinfo> {
    return this.prisma.datafileinfo.update<T>(args);
  }
  async deleteDatafileinfo<T extends Prisma.DatafileinfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatafileinfoDeleteArgs>
  ): Promise<Datafileinfo> {
    return this.prisma.datafileinfo.delete(args);
  }
}
