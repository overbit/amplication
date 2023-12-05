/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MhciPrereqsProgrammingTest, // @ts-ignore
  LuUsersUsertype,
} from "@prisma/client";

export class MhciPrereqsProgrammingTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MhciPrereqsProgrammingTestCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsProgrammingTestCountArgs>
  ): Promise<number> {
    return this.prisma.mhciPrereqsProgrammingTest.count(args);
  }

  async mhciPrereqsProgrammingTests<
    T extends Prisma.MhciPrereqsProgrammingTestFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsProgrammingTestFindManyArgs>
  ): Promise<MhciPrereqsProgrammingTest[]> {
    return this.prisma.mhciPrereqsProgrammingTest.findMany(args);
  }
  async mhciPrereqsProgrammingTest<
    T extends Prisma.MhciPrereqsProgrammingTestFindUniqueArgs
  >(
    args: Prisma.SelectSubset<
      T,
      Prisma.MhciPrereqsProgrammingTestFindUniqueArgs
    >
  ): Promise<MhciPrereqsProgrammingTest | null> {
    return this.prisma.mhciPrereqsProgrammingTest.findUnique(args);
  }
  async createMhciPrereqsProgrammingTest<
    T extends Prisma.MhciPrereqsProgrammingTestCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsProgrammingTestCreateArgs>
  ): Promise<MhciPrereqsProgrammingTest> {
    return this.prisma.mhciPrereqsProgrammingTest.create<T>(args);
  }
  async updateMhciPrereqsProgrammingTest<
    T extends Prisma.MhciPrereqsProgrammingTestUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsProgrammingTestUpdateArgs>
  ): Promise<MhciPrereqsProgrammingTest> {
    return this.prisma.mhciPrereqsProgrammingTest.update<T>(args);
  }
  async deleteMhciPrereqsProgrammingTest<
    T extends Prisma.MhciPrereqsProgrammingTestDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.MhciPrereqsProgrammingTestDeleteArgs>
  ): Promise<MhciPrereqsProgrammingTest> {
    return this.prisma.mhciPrereqsProgrammingTest.delete(args);
  }

  async getLuUsersUsertypes(parentId: number): Promise<LuUsersUsertype | null> {
    return this.prisma.mhciPrereqsProgrammingTest
      .findUnique({
        where: { id: parentId },
      })
      .luUsersUsertypes();
  }
}
