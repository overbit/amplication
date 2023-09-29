/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateMaterial } from "@prisma/client";

export class SlateMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateMaterialCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialCountArgs>
  ): Promise<number> {
    return this.prisma.slateMaterial.count(args);
  }

  async findMany<T extends Prisma.SlateMaterialFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialFindManyArgs>
  ): Promise<SlateMaterial[]> {
    return this.prisma.slateMaterial.findMany(args);
  }
  async findOne<T extends Prisma.SlateMaterialFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialFindUniqueArgs>
  ): Promise<SlateMaterial | null> {
    return this.prisma.slateMaterial.findUnique(args);
  }
  async create<T extends Prisma.SlateMaterialCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialCreateArgs>
  ): Promise<SlateMaterial> {
    return this.prisma.slateMaterial.create<T>(args);
  }
  async update<T extends Prisma.SlateMaterialUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialUpdateArgs>
  ): Promise<SlateMaterial> {
    return this.prisma.slateMaterial.update<T>(args);
  }
  async delete<T extends Prisma.SlateMaterialDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateMaterialDeleteArgs>
  ): Promise<SlateMaterial> {
    return this.prisma.slateMaterial.delete(args);
  }
}
