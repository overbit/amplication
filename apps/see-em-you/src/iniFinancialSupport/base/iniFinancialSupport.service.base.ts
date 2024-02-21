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
  IniFinancialSupport as PrismaIniFinancialSupport,
} from "@prisma/client";

export class IniFinancialSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IniFinancialSupportCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportCountArgs>
  ): Promise<number> {
    return this.prisma.iniFinancialSupport.count(args);
  }

  async iniFinancialSupports<T extends Prisma.IniFinancialSupportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportFindManyArgs>
  ): Promise<PrismaIniFinancialSupport[]> {
    return this.prisma.iniFinancialSupport.findMany(args);
  }
  async iniFinancialSupport<T extends Prisma.IniFinancialSupportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportFindUniqueArgs>
  ): Promise<PrismaIniFinancialSupport | null> {
    return this.prisma.iniFinancialSupport.findUnique(args);
  }
  async createIniFinancialSupport<
    T extends Prisma.IniFinancialSupportCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportCreateArgs>
  ): Promise<PrismaIniFinancialSupport> {
    return this.prisma.iniFinancialSupport.create<T>(args);
  }
  async updateIniFinancialSupport<
    T extends Prisma.IniFinancialSupportUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportUpdateArgs>
  ): Promise<PrismaIniFinancialSupport> {
    return this.prisma.iniFinancialSupport.update<T>(args);
  }
  async deleteIniFinancialSupport<
    T extends Prisma.IniFinancialSupportDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.IniFinancialSupportDeleteArgs>
  ): Promise<PrismaIniFinancialSupport> {
    return this.prisma.iniFinancialSupport.delete(args);
  }
}
