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
  Em2FinancialSupport as PrismaEm2FinancialSupport,
} from "@prisma/client";

export class Em2FinancialSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.Em2FinancialSupportCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportCountArgs>
  ): Promise<number> {
    return this.prisma.em2FinancialSupport.count(args);
  }

  async em2FinancialSupports<T extends Prisma.Em2FinancialSupportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportFindManyArgs>
  ): Promise<PrismaEm2FinancialSupport[]> {
    return this.prisma.em2FinancialSupport.findMany(args);
  }
  async em2FinancialSupport<T extends Prisma.Em2FinancialSupportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportFindUniqueArgs>
  ): Promise<PrismaEm2FinancialSupport | null> {
    return this.prisma.em2FinancialSupport.findUnique(args);
  }
  async createEm2FinancialSupport<
    T extends Prisma.Em2FinancialSupportCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportCreateArgs>
  ): Promise<PrismaEm2FinancialSupport> {
    return this.prisma.em2FinancialSupport.create<T>(args);
  }
  async updateEm2FinancialSupport<
    T extends Prisma.Em2FinancialSupportUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportUpdateArgs>
  ): Promise<PrismaEm2FinancialSupport> {
    return this.prisma.em2FinancialSupport.update<T>(args);
  }
  async deleteEm2FinancialSupport<
    T extends Prisma.Em2FinancialSupportDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.Em2FinancialSupportDeleteArgs>
  ): Promise<PrismaEm2FinancialSupport> {
    return this.prisma.em2FinancialSupport.delete(args);
  }
}
