/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Cohort } from "./Cohort";
import { CohortCountArgs } from "./CohortCountArgs";
import { CohortFindManyArgs } from "./CohortFindManyArgs";
import { CohortFindUniqueArgs } from "./CohortFindUniqueArgs";
import { CreateCohortArgs } from "./CreateCohortArgs";
import { UpdateCohortArgs } from "./UpdateCohortArgs";
import { DeleteCohortArgs } from "./DeleteCohortArgs";
import { Period } from "../../period/base/Period";
import { CohortService } from "../cohort.service";
@graphql.Resolver(() => Cohort)
export class CohortResolverBase {
  constructor(protected readonly service: CohortService) {}

  async _cohortsMeta(
    @graphql.Args() args: CohortCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Cohort])
  async cohorts(@graphql.Args() args: CohortFindManyArgs): Promise<Cohort[]> {
    return this.service.cohorts(args);
  }

  @graphql.Query(() => Cohort, { nullable: true })
  async cohort(
    @graphql.Args() args: CohortFindUniqueArgs
  ): Promise<Cohort | null> {
    const result = await this.service.cohort(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Cohort)
  async createCohort(@graphql.Args() args: CreateCohortArgs): Promise<Cohort> {
    return await this.service.createCohort({
      ...args,
      data: {
        ...args.data,

        period: args.data.period
          ? {
              connect: args.data.period,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Cohort)
  async updateCohort(
    @graphql.Args() args: UpdateCohortArgs
  ): Promise<Cohort | null> {
    try {
      return await this.service.updateCohort({
        ...args,
        data: {
          ...args.data,

          period: args.data.period
            ? {
                connect: args.data.period,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cohort)
  async deleteCohort(
    @graphql.Args() args: DeleteCohortArgs
  ): Promise<Cohort | null> {
    try {
      return await this.service.deleteCohort(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Period, {
    nullable: true,
    name: "period",
  })
  async getPeriod(@graphql.Parent() parent: Cohort): Promise<Period | null> {
    const result = await this.service.getPeriod(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
