/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MseBridgeCourse } from "@prisma/client";

export class MseBridgeCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MseBridgeCourseCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseCountArgs>
  ): Promise<number> {
    return this.prisma.mseBridgeCourse.count(args);
  }

  async mseBridgeCourses<T extends Prisma.MseBridgeCourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseFindManyArgs>
  ): Promise<MseBridgeCourse[]> {
    return this.prisma.mseBridgeCourse.findMany(args);
  }
  async mseBridgeCourse<T extends Prisma.MseBridgeCourseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseFindUniqueArgs>
  ): Promise<MseBridgeCourse | null> {
    return this.prisma.mseBridgeCourse.findUnique(args);
  }
  async createMseBridgeCourse<T extends Prisma.MseBridgeCourseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseCreateArgs>
  ): Promise<MseBridgeCourse> {
    return this.prisma.mseBridgeCourse.create<T>(args);
  }
  async updateMseBridgeCourse<T extends Prisma.MseBridgeCourseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseUpdateArgs>
  ): Promise<MseBridgeCourse> {
    return this.prisma.mseBridgeCourse.update<T>(args);
  }
  async deleteMseBridgeCourse<T extends Prisma.MseBridgeCourseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MseBridgeCourseDeleteArgs>
  ): Promise<MseBridgeCourse> {
    return this.prisma.mseBridgeCourse.delete(args);
  }
}
