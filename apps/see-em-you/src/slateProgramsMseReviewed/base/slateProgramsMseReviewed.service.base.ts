/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateProgramsMseReviewed } from "@prisma/client";

export class SlateProgramsMseReviewedServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateProgramsMseReviewedCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedCountArgs>
  ): Promise<number> {
    return this.prisma.slateProgramsMseReviewed.count(args);
  }

  async findMany<T extends Prisma.SlateProgramsMseReviewedFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedFindManyArgs>
  ): Promise<SlateProgramsMseReviewed[]> {
    return this.prisma.slateProgramsMseReviewed.findMany(args);
  }
  async findOne<T extends Prisma.SlateProgramsMseReviewedFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedFindUniqueArgs>
  ): Promise<SlateProgramsMseReviewed | null> {
    return this.prisma.slateProgramsMseReviewed.findUnique(args);
  }
  async create<T extends Prisma.SlateProgramsMseReviewedCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedCreateArgs>
  ): Promise<SlateProgramsMseReviewed> {
    return this.prisma.slateProgramsMseReviewed.create<T>(args);
  }
  async update<T extends Prisma.SlateProgramsMseReviewedUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedUpdateArgs>
  ): Promise<SlateProgramsMseReviewed> {
    return this.prisma.slateProgramsMseReviewed.update<T>(args);
  }
  async delete<T extends Prisma.SlateProgramsMseReviewedDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateProgramsMseReviewedDeleteArgs>
  ): Promise<SlateProgramsMseReviewed> {
    return this.prisma.slateProgramsMseReviewed.delete(args);
  }
}
