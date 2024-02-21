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
  ApplicationMergeFile as PrismaApplicationMergeFile,
} from "@prisma/client";

export class ApplicationMergeFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApplicationMergeFileCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileCountArgs>
  ): Promise<number> {
    return this.prisma.applicationMergeFile.count(args);
  }

  async applicationMergeFiles<
    T extends Prisma.ApplicationMergeFileFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileFindManyArgs>
  ): Promise<PrismaApplicationMergeFile[]> {
    return this.prisma.applicationMergeFile.findMany(args);
  }
  async applicationMergeFile<
    T extends Prisma.ApplicationMergeFileFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileFindUniqueArgs>
  ): Promise<PrismaApplicationMergeFile | null> {
    return this.prisma.applicationMergeFile.findUnique(args);
  }
  async createApplicationMergeFile<
    T extends Prisma.ApplicationMergeFileCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileCreateArgs>
  ): Promise<PrismaApplicationMergeFile> {
    return this.prisma.applicationMergeFile.create<T>(args);
  }
  async updateApplicationMergeFile<
    T extends Prisma.ApplicationMergeFileUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileUpdateArgs>
  ): Promise<PrismaApplicationMergeFile> {
    return this.prisma.applicationMergeFile.update<T>(args);
  }
  async deleteApplicationMergeFile<
    T extends Prisma.ApplicationMergeFileDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationMergeFileDeleteArgs>
  ): Promise<PrismaApplicationMergeFile> {
    return this.prisma.applicationMergeFile.delete(args);
  }
}
