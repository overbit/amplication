/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Toefl as PrismaToefl } from "@prisma/client";

export class ToeflServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ToeflCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflCountArgs>
  ): Promise<number> {
    return this.prisma.toefl.count(args);
  }

  async toefls<T extends Prisma.ToeflFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflFindManyArgs>
  ): Promise<PrismaToefl[]> {
    return this.prisma.toefl.findMany(args);
  }
  async toefl<T extends Prisma.ToeflFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflFindUniqueArgs>
  ): Promise<PrismaToefl | null> {
    return this.prisma.toefl.findUnique(args);
  }
  async createToefl<T extends Prisma.ToeflCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflCreateArgs>
  ): Promise<PrismaToefl> {
    return this.prisma.toefl.create<T>(args);
  }
  async updateToefl<T extends Prisma.ToeflUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflUpdateArgs>
  ): Promise<PrismaToefl> {
    return this.prisma.toefl.update<T>(args);
  }
  async deleteToefl<T extends Prisma.ToeflDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ToeflDeleteArgs>
  ): Promise<PrismaToefl> {
    return this.prisma.toefl.delete(args);
  }
}
