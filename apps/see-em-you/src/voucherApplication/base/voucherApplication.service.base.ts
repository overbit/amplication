/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, VoucherApplication } from "@prisma/client";

export class VoucherApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VoucherApplicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationCountArgs>
  ): Promise<number> {
    return this.prisma.voucherApplication.count(args);
  }

  async findMany<T extends Prisma.VoucherApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationFindManyArgs>
  ): Promise<VoucherApplication[]> {
    return this.prisma.voucherApplication.findMany(args);
  }
  async findOne<T extends Prisma.VoucherApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationFindUniqueArgs>
  ): Promise<VoucherApplication | null> {
    return this.prisma.voucherApplication.findUnique(args);
  }
  async create<T extends Prisma.VoucherApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationCreateArgs>
  ): Promise<VoucherApplication> {
    return this.prisma.voucherApplication.create<T>(args);
  }
  async update<T extends Prisma.VoucherApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationUpdateArgs>
  ): Promise<VoucherApplication> {
    return this.prisma.voucherApplication.update<T>(args);
  }
  async delete<T extends Prisma.VoucherApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationDeleteArgs>
  ): Promise<VoucherApplication> {
    return this.prisma.voucherApplication.delete(args);
  }
}
