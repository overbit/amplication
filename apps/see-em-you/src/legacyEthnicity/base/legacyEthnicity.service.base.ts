/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LegacyEthnicity } from "@prisma/client";

export class LegacyEthnicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LegacyEthnicityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityCountArgs>
  ): Promise<number> {
    return this.prisma.legacyEthnicity.count(args);
  }

  async findMany<T extends Prisma.LegacyEthnicityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityFindManyArgs>
  ): Promise<LegacyEthnicity[]> {
    return this.prisma.legacyEthnicity.findMany(args);
  }
  async findOne<T extends Prisma.LegacyEthnicityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityFindUniqueArgs>
  ): Promise<LegacyEthnicity | null> {
    return this.prisma.legacyEthnicity.findUnique(args);
  }
  async create<T extends Prisma.LegacyEthnicityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityCreateArgs>
  ): Promise<LegacyEthnicity> {
    return this.prisma.legacyEthnicity.create<T>(args);
  }
  async update<T extends Prisma.LegacyEthnicityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityUpdateArgs>
  ): Promise<LegacyEthnicity> {
    return this.prisma.legacyEthnicity.update<T>(args);
  }
  async delete<T extends Prisma.LegacyEthnicityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LegacyEthnicityDeleteArgs>
  ): Promise<LegacyEthnicity> {
    return this.prisma.legacyEthnicity.delete(args);
  }
}
