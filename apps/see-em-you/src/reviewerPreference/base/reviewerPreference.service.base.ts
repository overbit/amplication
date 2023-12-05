/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReviewerPreference } from "@prisma/client";

export class ReviewerPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReviewerPreferenceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceCountArgs>
  ): Promise<number> {
    return this.prisma.reviewerPreference.count(args);
  }

  async reviewerPreferences<T extends Prisma.ReviewerPreferenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceFindManyArgs>
  ): Promise<ReviewerPreference[]> {
    return this.prisma.reviewerPreference.findMany(args);
  }
  async reviewerPreference<T extends Prisma.ReviewerPreferenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceFindUniqueArgs>
  ): Promise<ReviewerPreference | null> {
    return this.prisma.reviewerPreference.findUnique(args);
  }
  async createReviewerPreference<T extends Prisma.ReviewerPreferenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceCreateArgs>
  ): Promise<ReviewerPreference> {
    return this.prisma.reviewerPreference.create<T>(args);
  }
  async updateReviewerPreference<T extends Prisma.ReviewerPreferenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceUpdateArgs>
  ): Promise<ReviewerPreference> {
    return this.prisma.reviewerPreference.update<T>(args);
  }
  async deleteReviewerPreference<T extends Prisma.ReviewerPreferenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewerPreferenceDeleteArgs>
  ): Promise<ReviewerPreference> {
    return this.prisma.reviewerPreference.delete(args);
  }
}
