/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MitsSlateAppSchool } from "@prisma/client";

export class MitsSlateAppSchoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MitsSlateAppSchoolCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolCountArgs>
  ): Promise<number> {
    return this.prisma.mitsSlateAppSchool.count(args);
  }

  async mitsSlateAppSchools<T extends Prisma.MitsSlateAppSchoolFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolFindManyArgs>
  ): Promise<MitsSlateAppSchool[]> {
    return this.prisma.mitsSlateAppSchool.findMany(args);
  }
  async mitsSlateAppSchool<T extends Prisma.MitsSlateAppSchoolFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolFindUniqueArgs>
  ): Promise<MitsSlateAppSchool | null> {
    return this.prisma.mitsSlateAppSchool.findUnique(args);
  }
  async createMitsSlateAppSchool<T extends Prisma.MitsSlateAppSchoolCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolCreateArgs>
  ): Promise<MitsSlateAppSchool> {
    return this.prisma.mitsSlateAppSchool.create<T>(args);
  }
  async updateMitsSlateAppSchool<T extends Prisma.MitsSlateAppSchoolUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolUpdateArgs>
  ): Promise<MitsSlateAppSchool> {
    return this.prisma.mitsSlateAppSchool.update<T>(args);
  }
  async deleteMitsSlateAppSchool<T extends Prisma.MitsSlateAppSchoolDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MitsSlateAppSchoolDeleteArgs>
  ): Promise<MitsSlateAppSchool> {
    return this.prisma.mitsSlateAppSchool.delete(args);
  }
}
