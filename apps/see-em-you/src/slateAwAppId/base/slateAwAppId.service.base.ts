/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateAwAppId as PrismaSlateAwAppId } from "@prisma/client";

export class SlateAwAppIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateAwAppIdCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdCountArgs>
  ): Promise<number> {
    return this.prisma.slateAwAppId.count(args);
  }

  async slateAwAppIds<T extends Prisma.SlateAwAppIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdFindManyArgs>
  ): Promise<PrismaSlateAwAppId[]> {
    return this.prisma.slateAwAppId.findMany(args);
  }
  async slateAwAppId<T extends Prisma.SlateAwAppIdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdFindUniqueArgs>
  ): Promise<PrismaSlateAwAppId | null> {
    return this.prisma.slateAwAppId.findUnique(args);
  }
  async createSlateAwAppId<T extends Prisma.SlateAwAppIdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdCreateArgs>
  ): Promise<PrismaSlateAwAppId> {
    return this.prisma.slateAwAppId.create<T>(args);
  }
  async updateSlateAwAppId<T extends Prisma.SlateAwAppIdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdUpdateArgs>
  ): Promise<PrismaSlateAwAppId> {
    return this.prisma.slateAwAppId.update<T>(args);
  }
  async deleteSlateAwAppId<T extends Prisma.SlateAwAppIdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdDeleteArgs>
  ): Promise<PrismaSlateAwAppId> {
    return this.prisma.slateAwAppId.delete(args);
  }
}
