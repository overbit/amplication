/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Assistantship } from "@prisma/client";

export class AssistantshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AssistantshipCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipCountArgs>
  ): Promise<number> {
    return this.prisma.assistantship.count(args);
  }

  async assistantships<T extends Prisma.AssistantshipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipFindManyArgs>
  ): Promise<Assistantship[]> {
    return this.prisma.assistantship.findMany(args);
  }
  async assistantship<T extends Prisma.AssistantshipFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipFindUniqueArgs>
  ): Promise<Assistantship | null> {
    return this.prisma.assistantship.findUnique(args);
  }
  async createAssistantship<T extends Prisma.AssistantshipCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipCreateArgs>
  ): Promise<Assistantship> {
    return this.prisma.assistantship.create<T>(args);
  }
  async updateAssistantship<T extends Prisma.AssistantshipUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipUpdateArgs>
  ): Promise<Assistantship> {
    return this.prisma.assistantship.update<T>(args);
  }
  async deleteAssistantship<T extends Prisma.AssistantshipDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssistantshipDeleteArgs>
  ): Promise<Assistantship> {
    return this.prisma.assistantship.delete(args);
  }
}
