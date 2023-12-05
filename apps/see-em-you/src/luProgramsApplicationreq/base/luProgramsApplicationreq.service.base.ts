/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LuProgramsApplicationreq } from "@prisma/client";

export class LuProgramsApplicationreqServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LuProgramsApplicationreqCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqCountArgs>
  ): Promise<number> {
    return this.prisma.luProgramsApplicationreq.count(args);
  }

  async luProgramsApplicationreqs<
    T extends Prisma.LuProgramsApplicationreqFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqFindManyArgs>
  ): Promise<LuProgramsApplicationreq[]> {
    return this.prisma.luProgramsApplicationreq.findMany(args);
  }
  async luProgramsApplicationreq<
    T extends Prisma.LuProgramsApplicationreqFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqFindUniqueArgs>
  ): Promise<LuProgramsApplicationreq | null> {
    return this.prisma.luProgramsApplicationreq.findUnique(args);
  }
  async createLuProgramsApplicationreq<
    T extends Prisma.LuProgramsApplicationreqCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqCreateArgs>
  ): Promise<LuProgramsApplicationreq> {
    return this.prisma.luProgramsApplicationreq.create<T>(args);
  }
  async updateLuProgramsApplicationreq<
    T extends Prisma.LuProgramsApplicationreqUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqUpdateArgs>
  ): Promise<LuProgramsApplicationreq> {
    return this.prisma.luProgramsApplicationreq.update<T>(args);
  }
  async deleteLuProgramsApplicationreq<
    T extends Prisma.LuProgramsApplicationreqDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsApplicationreqDeleteArgs>
  ): Promise<LuProgramsApplicationreq> {
    return this.prisma.luProgramsApplicationreq.delete(args);
  }
}
