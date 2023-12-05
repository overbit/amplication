/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Em2Sop } from "@prisma/client";

export class Em2SopServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.Em2SopCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopCountArgs>
  ): Promise<number> {
    return this.prisma.em2Sop.count(args);
  }

  async em2Sops<T extends Prisma.Em2SopFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopFindManyArgs>
  ): Promise<Em2Sop[]> {
    return this.prisma.em2Sop.findMany(args);
  }
  async em2Sop<T extends Prisma.Em2SopFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopFindUniqueArgs>
  ): Promise<Em2Sop | null> {
    return this.prisma.em2Sop.findUnique(args);
  }
  async createEm2Sop<T extends Prisma.Em2SopCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopCreateArgs>
  ): Promise<Em2Sop> {
    return this.prisma.em2Sop.create<T>(args);
  }
  async updateEm2Sop<T extends Prisma.Em2SopUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopUpdateArgs>
  ): Promise<Em2Sop> {
    return this.prisma.em2Sop.update<T>(args);
  }
  async deleteEm2Sop<T extends Prisma.Em2SopDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.Em2SopDeleteArgs>
  ): Promise<Em2Sop> {
    return this.prisma.em2Sop.delete(args);
  }
}
