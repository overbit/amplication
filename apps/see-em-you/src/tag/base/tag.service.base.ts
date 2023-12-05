/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Tag } from "@prisma/client";

export class TagServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCountArgs>
  ): Promise<number> {
    return this.prisma.tag.count(args);
  }

  async tags<T extends Prisma.TagFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagFindManyArgs>
  ): Promise<Tag[]> {
    return this.prisma.tag.findMany(args);
  }
  async tag<T extends Prisma.TagFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagFindUniqueArgs>
  ): Promise<Tag | null> {
    return this.prisma.tag.findUnique(args);
  }
  async createTag<T extends Prisma.TagCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>
  ): Promise<Tag> {
    return this.prisma.tag.create<T>(args);
  }
  async updateTag<T extends Prisma.TagUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagUpdateArgs>
  ): Promise<Tag> {
    return this.prisma.tag.update<T>(args);
  }
  async deleteTag<T extends Prisma.TagDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagDeleteArgs>
  ): Promise<Tag> {
    return this.prisma.tag.delete(args);
  }
}
