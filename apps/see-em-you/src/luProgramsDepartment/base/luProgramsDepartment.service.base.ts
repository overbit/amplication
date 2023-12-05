/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LuProgramsDepartment } from "@prisma/client";

export class LuProgramsDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LuProgramsDepartmentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentCountArgs>
  ): Promise<number> {
    return this.prisma.luProgramsDepartment.count(args);
  }

  async luProgramsDepartments<
    T extends Prisma.LuProgramsDepartmentFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentFindManyArgs>
  ): Promise<LuProgramsDepartment[]> {
    return this.prisma.luProgramsDepartment.findMany(args);
  }
  async luProgramsDepartment<
    T extends Prisma.LuProgramsDepartmentFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentFindUniqueArgs>
  ): Promise<LuProgramsDepartment | null> {
    return this.prisma.luProgramsDepartment.findUnique(args);
  }
  async createLuProgramsDepartment<
    T extends Prisma.LuProgramsDepartmentCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentCreateArgs>
  ): Promise<LuProgramsDepartment> {
    return this.prisma.luProgramsDepartment.create<T>(args);
  }
  async updateLuProgramsDepartment<
    T extends Prisma.LuProgramsDepartmentUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentUpdateArgs>
  ): Promise<LuProgramsDepartment> {
    return this.prisma.luProgramsDepartment.update<T>(args);
  }
  async deleteLuProgramsDepartment<
    T extends Prisma.LuProgramsDepartmentDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.LuProgramsDepartmentDeleteArgs>
  ): Promise<LuProgramsDepartment> {
    return this.prisma.luProgramsDepartment.delete(args);
  }
}
