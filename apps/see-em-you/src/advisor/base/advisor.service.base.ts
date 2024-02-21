/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Advisor as PrismaAdvisor } from "@prisma/client";

export class AdvisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AdvisorCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorCountArgs>
  ): Promise<number> {
    return this.prisma.advisor.count(args);
  }

  async advisors<T extends Prisma.AdvisorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorFindManyArgs>
  ): Promise<PrismaAdvisor[]> {
    return this.prisma.advisor.findMany(args);
  }
  async advisor<T extends Prisma.AdvisorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorFindUniqueArgs>
  ): Promise<PrismaAdvisor | null> {
    return this.prisma.advisor.findUnique(args);
  }
  async createAdvisor<T extends Prisma.AdvisorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorCreateArgs>
  ): Promise<PrismaAdvisor> {
    return this.prisma.advisor.create<T>(args);
  }
  async updateAdvisor<T extends Prisma.AdvisorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorUpdateArgs>
  ): Promise<PrismaAdvisor> {
    return this.prisma.advisor.update<T>(args);
  }
  async deleteAdvisor<T extends Prisma.AdvisorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvisorDeleteArgs>
  ): Promise<PrismaAdvisor> {
    return this.prisma.advisor.delete(args);
  }
}
