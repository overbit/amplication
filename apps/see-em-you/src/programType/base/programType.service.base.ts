/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProgramType } from "@prisma/client";

export class ProgramTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProgramTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeCountArgs>
  ): Promise<number> {
    return this.prisma.programType.count(args);
  }

  async findMany<T extends Prisma.ProgramTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeFindManyArgs>
  ): Promise<ProgramType[]> {
    return this.prisma.programType.findMany(args);
  }
  async findOne<T extends Prisma.ProgramTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeFindUniqueArgs>
  ): Promise<ProgramType | null> {
    return this.prisma.programType.findUnique(args);
  }
  async create<T extends Prisma.ProgramTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeCreateArgs>
  ): Promise<ProgramType> {
    return this.prisma.programType.create<T>(args);
  }
  async update<T extends Prisma.ProgramTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeUpdateArgs>
  ): Promise<ProgramType> {
    return this.prisma.programType.update<T>(args);
  }
  async delete<T extends Prisma.ProgramTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramTypeDeleteArgs>
  ): Promise<ProgramType> {
    return this.prisma.programType.delete(args);
  }
}
