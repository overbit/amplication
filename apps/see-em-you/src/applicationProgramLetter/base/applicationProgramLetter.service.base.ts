/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ApplicationProgramLetter } from "@prisma/client";

export class ApplicationProgramLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApplicationProgramLetterCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterCountArgs>
  ): Promise<number> {
    return this.prisma.applicationProgramLetter.count(args);
  }

  async applicationProgramLetters<
    T extends Prisma.ApplicationProgramLetterFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterFindManyArgs>
  ): Promise<ApplicationProgramLetter[]> {
    return this.prisma.applicationProgramLetter.findMany(args);
  }
  async applicationProgramLetter<
    T extends Prisma.ApplicationProgramLetterFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterFindUniqueArgs>
  ): Promise<ApplicationProgramLetter | null> {
    return this.prisma.applicationProgramLetter.findUnique(args);
  }
  async createApplicationProgramLetter<
    T extends Prisma.ApplicationProgramLetterCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterCreateArgs>
  ): Promise<ApplicationProgramLetter> {
    return this.prisma.applicationProgramLetter.create<T>(args);
  }
  async updateApplicationProgramLetter<
    T extends Prisma.ApplicationProgramLetterUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterUpdateArgs>
  ): Promise<ApplicationProgramLetter> {
    return this.prisma.applicationProgramLetter.update<T>(args);
  }
  async deleteApplicationProgramLetter<
    T extends Prisma.ApplicationProgramLetterDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.ApplicationProgramLetterDeleteArgs>
  ): Promise<ApplicationProgramLetter> {
    return this.prisma.applicationProgramLetter.delete(args);
  }
}
