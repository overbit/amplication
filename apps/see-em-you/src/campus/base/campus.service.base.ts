/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Campus as PrismaCampus } from "@prisma/client";

export class CampusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CampusCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusCountArgs>
  ): Promise<number> {
    return this.prisma.campus.count(args);
  }

  async campuses<T extends Prisma.CampusFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusFindManyArgs>
  ): Promise<PrismaCampus[]> {
    return this.prisma.campus.findMany(args);
  }
  async campus<T extends Prisma.CampusFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusFindUniqueArgs>
  ): Promise<PrismaCampus | null> {
    return this.prisma.campus.findUnique(args);
  }
  async createCampus<T extends Prisma.CampusCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusCreateArgs>
  ): Promise<PrismaCampus> {
    return this.prisma.campus.create<T>(args);
  }
  async updateCampus<T extends Prisma.CampusUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusUpdateArgs>
  ): Promise<PrismaCampus> {
    return this.prisma.campus.update<T>(args);
  }
  async deleteCampus<T extends Prisma.CampusDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampusDeleteArgs>
  ): Promise<PrismaCampus> {
    return this.prisma.campus.delete(args);
  }
}
