/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UsHsStatus } from "@prisma/client";

export class UsHsStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UsHsStatusCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusCountArgs>
  ): Promise<number> {
    return this.prisma.usHsStatus.count(args);
  }

  async findMany<T extends Prisma.UsHsStatusFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusFindManyArgs>
  ): Promise<UsHsStatus[]> {
    return this.prisma.usHsStatus.findMany(args);
  }
  async findOne<T extends Prisma.UsHsStatusFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusFindUniqueArgs>
  ): Promise<UsHsStatus | null> {
    return this.prisma.usHsStatus.findUnique(args);
  }
  async create<T extends Prisma.UsHsStatusCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusCreateArgs>
  ): Promise<UsHsStatus> {
    return this.prisma.usHsStatus.create<T>(args);
  }
  async update<T extends Prisma.UsHsStatusUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusUpdateArgs>
  ): Promise<UsHsStatus> {
    return this.prisma.usHsStatus.update<T>(args);
  }
  async delete<T extends Prisma.UsHsStatusDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHsStatusDeleteArgs>
  ): Promise<UsHsStatus> {
    return this.prisma.usHsStatus.delete(args);
  }
}
