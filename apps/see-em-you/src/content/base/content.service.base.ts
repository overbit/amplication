/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Content as PrismaContent } from "@prisma/client";

export class ContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentCountArgs>
  ): Promise<number> {
    return this.prisma.content.count(args);
  }

  async contents<T extends Prisma.ContentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>
  ): Promise<PrismaContent[]> {
    return this.prisma.content.findMany(args);
  }
  async content<T extends Prisma.ContentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>
  ): Promise<PrismaContent | null> {
    return this.prisma.content.findUnique(args);
  }
  async createContent<T extends Prisma.ContentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentCreateArgs>
  ): Promise<PrismaContent> {
    return this.prisma.content.create<T>(args);
  }
  async updateContent<T extends Prisma.ContentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentUpdateArgs>
  ): Promise<PrismaContent> {
    return this.prisma.content.update<T>(args);
  }
  async deleteContent<T extends Prisma.ContentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContentDeleteArgs>
  ): Promise<PrismaContent> {
    return this.prisma.content.delete(args);
  }
}
