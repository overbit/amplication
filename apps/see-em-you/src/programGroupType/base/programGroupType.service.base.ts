/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProgramGroupType } from "@prisma/client";

export class ProgramGroupTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProgramGroupTypeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeCountArgs>
  ): Promise<number> {
    return this.prisma.programGroupType.count(args);
  }

  async findMany<T extends Prisma.ProgramGroupTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeFindManyArgs>
  ): Promise<ProgramGroupType[]> {
    return this.prisma.programGroupType.findMany(args);
  }
  async findOne<T extends Prisma.ProgramGroupTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeFindUniqueArgs>
  ): Promise<ProgramGroupType | null> {
    return this.prisma.programGroupType.findUnique(args);
  }
  async create<T extends Prisma.ProgramGroupTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeCreateArgs>
  ): Promise<ProgramGroupType> {
    return this.prisma.programGroupType.create<T>(args);
  }
  async update<T extends Prisma.ProgramGroupTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeUpdateArgs>
  ): Promise<ProgramGroupType> {
    return this.prisma.programGroupType.update<T>(args);
  }
  async delete<T extends Prisma.ProgramGroupTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramGroupTypeDeleteArgs>
  ): Promise<ProgramGroupType> {
    return this.prisma.programGroupType.delete(args);
  }
}
