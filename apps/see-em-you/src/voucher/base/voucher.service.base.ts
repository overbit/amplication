/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Voucher as PrismaVoucher } from "@prisma/client";

export class VoucherServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VoucherCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherCountArgs>
  ): Promise<number> {
    return this.prisma.voucher.count(args);
  }

  async vouchers<T extends Prisma.VoucherFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherFindManyArgs>
  ): Promise<PrismaVoucher[]> {
    return this.prisma.voucher.findMany(args);
  }
  async voucher<T extends Prisma.VoucherFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherFindUniqueArgs>
  ): Promise<PrismaVoucher | null> {
    return this.prisma.voucher.findUnique(args);
  }
  async createVoucher<T extends Prisma.VoucherCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherCreateArgs>
  ): Promise<PrismaVoucher> {
    return this.prisma.voucher.create<T>(args);
  }
  async updateVoucher<T extends Prisma.VoucherUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherUpdateArgs>
  ): Promise<PrismaVoucher> {
    return this.prisma.voucher.update<T>(args);
  }
  async deleteVoucher<T extends Prisma.VoucherDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherDeleteArgs>
  ): Promise<PrismaVoucher> {
    return this.prisma.voucher.delete(args);
  }
}
