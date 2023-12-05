/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, VoucherProgram } from "@prisma/client";

export class VoucherProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VoucherProgramCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramCountArgs>
  ): Promise<number> {
    return this.prisma.voucherProgram.count(args);
  }

  async voucherPrograms<T extends Prisma.VoucherProgramFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramFindManyArgs>
  ): Promise<VoucherProgram[]> {
    return this.prisma.voucherProgram.findMany(args);
  }
  async voucherProgram<T extends Prisma.VoucherProgramFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramFindUniqueArgs>
  ): Promise<VoucherProgram | null> {
    return this.prisma.voucherProgram.findUnique(args);
  }
  async createVoucherProgram<T extends Prisma.VoucherProgramCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramCreateArgs>
  ): Promise<VoucherProgram> {
    return this.prisma.voucherProgram.create<T>(args);
  }
  async updateVoucherProgram<T extends Prisma.VoucherProgramUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramUpdateArgs>
  ): Promise<VoucherProgram> {
    return this.prisma.voucherProgram.update<T>(args);
  }
  async deleteVoucherProgram<T extends Prisma.VoucherProgramDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VoucherProgramDeleteArgs>
  ): Promise<VoucherProgram> {
    return this.prisma.voucherProgram.delete(args);
  }
}
