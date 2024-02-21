/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateCodility as PrismaSlateCodility } from "@prisma/client";

export class SlateCodilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateCodilityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityCountArgs>
  ): Promise<number> {
    return this.prisma.slateCodility.count(args);
  }

  async slateCodilities<T extends Prisma.SlateCodilityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityFindManyArgs>
  ): Promise<PrismaSlateCodility[]> {
    return this.prisma.slateCodility.findMany(args);
  }
  async slateCodility<T extends Prisma.SlateCodilityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityFindUniqueArgs>
  ): Promise<PrismaSlateCodility | null> {
    return this.prisma.slateCodility.findUnique(args);
  }
  async createSlateCodility<T extends Prisma.SlateCodilityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityCreateArgs>
  ): Promise<PrismaSlateCodility> {
    return this.prisma.slateCodility.create<T>(args);
  }
  async updateSlateCodility<T extends Prisma.SlateCodilityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityUpdateArgs>
  ): Promise<PrismaSlateCodility> {
    return this.prisma.slateCodility.update<T>(args);
  }
  async deleteSlateCodility<T extends Prisma.SlateCodilityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateCodilityDeleteArgs>
  ): Promise<PrismaSlateCodility> {
    return this.prisma.slateCodility.delete(args);
  }
}
