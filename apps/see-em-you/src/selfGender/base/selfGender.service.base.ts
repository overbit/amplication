/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SelfGender as PrismaSelfGender } from "@prisma/client";

export class SelfGenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SelfGenderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderCountArgs>
  ): Promise<number> {
    return this.prisma.selfGender.count(args);
  }

  async selfGenders<T extends Prisma.SelfGenderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderFindManyArgs>
  ): Promise<PrismaSelfGender[]> {
    return this.prisma.selfGender.findMany(args);
  }
  async selfGender<T extends Prisma.SelfGenderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderFindUniqueArgs>
  ): Promise<PrismaSelfGender | null> {
    return this.prisma.selfGender.findUnique(args);
  }
  async createSelfGender<T extends Prisma.SelfGenderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderCreateArgs>
  ): Promise<PrismaSelfGender> {
    return this.prisma.selfGender.create<T>(args);
  }
  async updateSelfGender<T extends Prisma.SelfGenderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderUpdateArgs>
  ): Promise<PrismaSelfGender> {
    return this.prisma.selfGender.update<T>(args);
  }
  async deleteSelfGender<T extends Prisma.SelfGenderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SelfGenderDeleteArgs>
  ): Promise<PrismaSelfGender> {
    return this.prisma.selfGender.delete(args);
  }
}
