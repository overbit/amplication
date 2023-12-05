/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Disability } from "@prisma/client";

export class DisabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DisabilityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityCountArgs>
  ): Promise<number> {
    return this.prisma.disability.count(args);
  }

  async disabilities<T extends Prisma.DisabilityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityFindManyArgs>
  ): Promise<Disability[]> {
    return this.prisma.disability.findMany(args);
  }
  async disability<T extends Prisma.DisabilityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityFindUniqueArgs>
  ): Promise<Disability | null> {
    return this.prisma.disability.findUnique(args);
  }
  async createDisability<T extends Prisma.DisabilityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityCreateArgs>
  ): Promise<Disability> {
    return this.prisma.disability.create<T>(args);
  }
  async updateDisability<T extends Prisma.DisabilityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityUpdateArgs>
  ): Promise<Disability> {
    return this.prisma.disability.update<T>(args);
  }
  async deleteDisability<T extends Prisma.DisabilityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DisabilityDeleteArgs>
  ): Promise<Disability> {
    return this.prisma.disability.delete(args);
  }
}
