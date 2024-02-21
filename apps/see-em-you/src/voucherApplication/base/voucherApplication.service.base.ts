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
  VoucherApplication as PrismaVoucherApplication,
} from "@prisma/client";

export class VoucherApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VoucherApplicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationCountArgs>
  ): Promise<number> {
    return this.prisma.voucherApplication.count(args);
  }

  async voucherApplications<T extends Prisma.VoucherApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationFindManyArgs>
  ): Promise<PrismaVoucherApplication[]> {
    return this.prisma.voucherApplication.findMany(args);
  }
  async voucherApplication<T extends Prisma.VoucherApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationFindUniqueArgs>
  ): Promise<PrismaVoucherApplication | null> {
    return this.prisma.voucherApplication.findUnique(args);
  }
  async createVoucherApplication<T extends Prisma.VoucherApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationCreateArgs>
  ): Promise<PrismaVoucherApplication> {
    return this.prisma.voucherApplication.create<T>(args);
  }
  async updateVoucherApplication<T extends Prisma.VoucherApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationUpdateArgs>
  ): Promise<PrismaVoucherApplication> {
    return this.prisma.voucherApplication.update<T>(args);
  }
  async deleteVoucherApplication<T extends Prisma.VoucherApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherApplicationDeleteArgs>
  ): Promise<PrismaVoucherApplication> {
    return this.prisma.voucherApplication.delete(args);
  }
}
