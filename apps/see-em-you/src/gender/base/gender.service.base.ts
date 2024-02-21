/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Gender as PrismaGender } from "@prisma/client";

export class GenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GenderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderCountArgs>
  ): Promise<number> {
    return this.prisma.gender.count(args);
  }

  async genders<T extends Prisma.GenderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderFindManyArgs>
  ): Promise<PrismaGender[]> {
    return this.prisma.gender.findMany(args);
  }
  async gender<T extends Prisma.GenderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderFindUniqueArgs>
  ): Promise<PrismaGender | null> {
    return this.prisma.gender.findUnique(args);
  }
  async createGender<T extends Prisma.GenderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderCreateArgs>
  ): Promise<PrismaGender> {
    return this.prisma.gender.create<T>(args);
  }
  async updateGender<T extends Prisma.GenderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderUpdateArgs>
  ): Promise<PrismaGender> {
    return this.prisma.gender.update<T>(args);
  }
  async deleteGender<T extends Prisma.GenderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenderDeleteArgs>
  ): Promise<PrismaGender> {
    return this.prisma.gender.delete(args);
  }
}
