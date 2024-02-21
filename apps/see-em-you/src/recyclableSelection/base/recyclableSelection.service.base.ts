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
  RecyclableSelection as PrismaRecyclableSelection,
} from "@prisma/client";

export class RecyclableSelectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RecyclableSelectionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionCountArgs>
  ): Promise<number> {
    return this.prisma.recyclableSelection.count(args);
  }

  async recyclableSelections<T extends Prisma.RecyclableSelectionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionFindManyArgs>
  ): Promise<PrismaRecyclableSelection[]> {
    return this.prisma.recyclableSelection.findMany(args);
  }
  async recyclableSelection<T extends Prisma.RecyclableSelectionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionFindUniqueArgs>
  ): Promise<PrismaRecyclableSelection | null> {
    return this.prisma.recyclableSelection.findUnique(args);
  }
  async createRecyclableSelection<
    T extends Prisma.RecyclableSelectionCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionCreateArgs>
  ): Promise<PrismaRecyclableSelection> {
    return this.prisma.recyclableSelection.create<T>(args);
  }
  async updateRecyclableSelection<
    T extends Prisma.RecyclableSelectionUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionUpdateArgs>
  ): Promise<PrismaRecyclableSelection> {
    return this.prisma.recyclableSelection.update<T>(args);
  }
  async deleteRecyclableSelection<
    T extends Prisma.RecyclableSelectionDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RecyclableSelectionDeleteArgs>
  ): Promise<PrismaRecyclableSelection> {
    return this.prisma.recyclableSelection.delete(args);
  }
}
