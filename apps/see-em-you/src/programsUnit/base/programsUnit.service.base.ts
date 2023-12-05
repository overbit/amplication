/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProgramsUnit } from "@prisma/client";

export class ProgramsUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProgramsUnitCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitCountArgs>
  ): Promise<number> {
    return this.prisma.programsUnit.count(args);
  }

  async programsUnits<T extends Prisma.ProgramsUnitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitFindManyArgs>
  ): Promise<ProgramsUnit[]> {
    return this.prisma.programsUnit.findMany(args);
  }
  async programsUnit<T extends Prisma.ProgramsUnitFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitFindUniqueArgs>
  ): Promise<ProgramsUnit | null> {
    return this.prisma.programsUnit.findUnique(args);
  }
  async createProgramsUnit<T extends Prisma.ProgramsUnitCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitCreateArgs>
  ): Promise<ProgramsUnit> {
    return this.prisma.programsUnit.create<T>(args);
  }
  async updateProgramsUnit<T extends Prisma.ProgramsUnitUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitUpdateArgs>
  ): Promise<ProgramsUnit> {
    return this.prisma.programsUnit.update<T>(args);
  }
  async deleteProgramsUnit<T extends Prisma.ProgramsUnitDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramsUnitDeleteArgs>
  ): Promise<ProgramsUnit> {
    return this.prisma.programsUnit.delete(args);
  }
}
