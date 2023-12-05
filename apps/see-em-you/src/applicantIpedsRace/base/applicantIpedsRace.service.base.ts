/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ApplicantIpedsRace } from "@prisma/client";

export class ApplicantIpedsRaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApplicantIpedsRaceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceCountArgs>
  ): Promise<number> {
    return this.prisma.applicantIpedsRace.count(args);
  }

  async applicantIpedsRaces<T extends Prisma.ApplicantIpedsRaceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceFindManyArgs>
  ): Promise<ApplicantIpedsRace[]> {
    return this.prisma.applicantIpedsRace.findMany(args);
  }
  async applicantIpedsRace<T extends Prisma.ApplicantIpedsRaceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceFindUniqueArgs>
  ): Promise<ApplicantIpedsRace | null> {
    return this.prisma.applicantIpedsRace.findUnique(args);
  }
  async createApplicantIpedsRace<T extends Prisma.ApplicantIpedsRaceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceCreateArgs>
  ): Promise<ApplicantIpedsRace> {
    return this.prisma.applicantIpedsRace.create<T>(args);
  }
  async updateApplicantIpedsRace<T extends Prisma.ApplicantIpedsRaceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceUpdateArgs>
  ): Promise<ApplicantIpedsRace> {
    return this.prisma.applicantIpedsRace.update<T>(args);
  }
  async deleteApplicantIpedsRace<T extends Prisma.ApplicantIpedsRaceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicantIpedsRaceDeleteArgs>
  ): Promise<ApplicantIpedsRace> {
    return this.prisma.applicantIpedsRace.delete(args);
  }
}
