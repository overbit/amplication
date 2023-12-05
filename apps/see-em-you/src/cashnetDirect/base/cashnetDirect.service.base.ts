/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CashnetDirect } from "@prisma/client";

export class CashnetDirectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CashnetDirectCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectCountArgs>
  ): Promise<number> {
    return this.prisma.cashnetDirect.count(args);
  }

  async cashnetDirects<T extends Prisma.CashnetDirectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectFindManyArgs>
  ): Promise<CashnetDirect[]> {
    return this.prisma.cashnetDirect.findMany(args);
  }
  async cashnetDirect<T extends Prisma.CashnetDirectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectFindUniqueArgs>
  ): Promise<CashnetDirect | null> {
    return this.prisma.cashnetDirect.findUnique(args);
  }
  async createCashnetDirect<T extends Prisma.CashnetDirectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectCreateArgs>
  ): Promise<CashnetDirect> {
    return this.prisma.cashnetDirect.create<T>(args);
  }
  async updateCashnetDirect<T extends Prisma.CashnetDirectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectUpdateArgs>
  ): Promise<CashnetDirect> {
    return this.prisma.cashnetDirect.update<T>(args);
  }
  async deleteCashnetDirect<T extends Prisma.CashnetDirectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CashnetDirectDeleteArgs>
  ): Promise<CashnetDirect> {
    return this.prisma.cashnetDirect.delete(args);
  }
}
