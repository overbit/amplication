/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  RissFunding as PrismaRissFunding,
  Application as PrismaApplication,
} from "@prisma/client";

export class RissFundingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RissFundingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingCountArgs>
  ): Promise<number> {
    return this.prisma.rissFunding.count(args);
  }

  async rissFundings<T extends Prisma.RissFundingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingFindManyArgs>
  ): Promise<PrismaRissFunding[]> {
    return this.prisma.rissFunding.findMany(args);
  }
  async rissFunding<T extends Prisma.RissFundingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingFindUniqueArgs>
  ): Promise<PrismaRissFunding | null> {
    return this.prisma.rissFunding.findUnique(args);
  }
  async createRissFunding<T extends Prisma.RissFundingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingCreateArgs>
  ): Promise<PrismaRissFunding> {
    return this.prisma.rissFunding.create<T>(args);
  }
  async updateRissFunding<T extends Prisma.RissFundingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingUpdateArgs>
  ): Promise<PrismaRissFunding> {
    return this.prisma.rissFunding.update<T>(args);
  }
  async deleteRissFunding<T extends Prisma.RissFundingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RissFundingDeleteArgs>
  ): Promise<PrismaRissFunding> {
    return this.prisma.rissFunding.delete(args);
  }

  async getApplication(parentId: number): Promise<PrismaApplication | null> {
    return this.prisma.rissFunding
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
