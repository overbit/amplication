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
  StudentDecision, // @ts-ignore
  Application,
} from "@prisma/client";

export class StudentDecisionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StudentDecisionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionCountArgs>
  ): Promise<number> {
    return this.prisma.studentDecision.count(args);
  }

  async studentDecisions<T extends Prisma.StudentDecisionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionFindManyArgs>
  ): Promise<StudentDecision[]> {
    return this.prisma.studentDecision.findMany(args);
  }
  async studentDecision<T extends Prisma.StudentDecisionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionFindUniqueArgs>
  ): Promise<StudentDecision | null> {
    return this.prisma.studentDecision.findUnique(args);
  }
  async createStudentDecision<T extends Prisma.StudentDecisionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionCreateArgs>
  ): Promise<StudentDecision> {
    return this.prisma.studentDecision.create<T>(args);
  }
  async updateStudentDecision<T extends Prisma.StudentDecisionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionUpdateArgs>
  ): Promise<StudentDecision> {
    return this.prisma.studentDecision.update<T>(args);
  }
  async deleteStudentDecision<T extends Prisma.StudentDecisionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionDeleteArgs>
  ): Promise<StudentDecision> {
    return this.prisma.studentDecision.delete(args);
  }

  async getApplication(parentId: string): Promise<Application | null> {
    return this.prisma.studentDecision
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }
}
