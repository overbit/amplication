/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Ethnicity } from "@prisma/client";

export class EthnicityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EthnicityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityCountArgs>
  ): Promise<number> {
    return this.prisma.ethnicity.count(args);
  }

  async ethnicities<T extends Prisma.EthnicityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityFindManyArgs>
  ): Promise<Ethnicity[]> {
    return this.prisma.ethnicity.findMany(args);
  }
  async ethnicity<T extends Prisma.EthnicityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityFindUniqueArgs>
  ): Promise<Ethnicity | null> {
    return this.prisma.ethnicity.findUnique(args);
  }
  async createEthnicity<T extends Prisma.EthnicityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityCreateArgs>
  ): Promise<Ethnicity> {
    return this.prisma.ethnicity.create<T>(args);
  }
  async updateEthnicity<T extends Prisma.EthnicityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityUpdateArgs>
  ): Promise<Ethnicity> {
    return this.prisma.ethnicity.update<T>(args);
  }
  async deleteEthnicity<T extends Prisma.EthnicityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EthnicityDeleteArgs>
  ): Promise<Ethnicity> {
    return this.prisma.ethnicity.delete(args);
  }
}
