/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DietrichDiversity } from "@prisma/client";

export class DietrichDiversityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DietrichDiversityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityCountArgs>
  ): Promise<number> {
    return this.prisma.dietrichDiversity.count(args);
  }

  async dietrichDiversities<T extends Prisma.DietrichDiversityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityFindManyArgs>
  ): Promise<DietrichDiversity[]> {
    return this.prisma.dietrichDiversity.findMany(args);
  }
  async dietrichDiversity<T extends Prisma.DietrichDiversityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityFindUniqueArgs>
  ): Promise<DietrichDiversity | null> {
    return this.prisma.dietrichDiversity.findUnique(args);
  }
  async createDietrichDiversity<T extends Prisma.DietrichDiversityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityCreateArgs>
  ): Promise<DietrichDiversity> {
    return this.prisma.dietrichDiversity.create<T>(args);
  }
  async updateDietrichDiversity<T extends Prisma.DietrichDiversityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityUpdateArgs>
  ): Promise<DietrichDiversity> {
    return this.prisma.dietrichDiversity.update<T>(args);
  }
  async deleteDietrichDiversity<T extends Prisma.DietrichDiversityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DietrichDiversityDeleteArgs>
  ): Promise<DietrichDiversity> {
    return this.prisma.dietrichDiversity.delete(args);
  }
}
