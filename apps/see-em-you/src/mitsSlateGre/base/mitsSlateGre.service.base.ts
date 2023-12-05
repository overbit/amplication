/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MitsSlateGre } from "@prisma/client";

export class MitsSlateGreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MitsSlateGreCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreCountArgs>
  ): Promise<number> {
    return this.prisma.mitsSlateGre.count(args);
  }

  async mitsSlateGres<T extends Prisma.MitsSlateGreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreFindManyArgs>
  ): Promise<MitsSlateGre[]> {
    return this.prisma.mitsSlateGre.findMany(args);
  }
  async mitsSlateGre<T extends Prisma.MitsSlateGreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreFindUniqueArgs>
  ): Promise<MitsSlateGre | null> {
    return this.prisma.mitsSlateGre.findUnique(args);
  }
  async createMitsSlateGre<T extends Prisma.MitsSlateGreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreCreateArgs>
  ): Promise<MitsSlateGre> {
    return this.prisma.mitsSlateGre.create<T>(args);
  }
  async updateMitsSlateGre<T extends Prisma.MitsSlateGreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreUpdateArgs>
  ): Promise<MitsSlateGre> {
    return this.prisma.mitsSlateGre.update<T>(args);
  }
  async deleteMitsSlateGre<T extends Prisma.MitsSlateGreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateGreDeleteArgs>
  ): Promise<MitsSlateGre> {
    return this.prisma.mitsSlateGre.delete(args);
  }
}
