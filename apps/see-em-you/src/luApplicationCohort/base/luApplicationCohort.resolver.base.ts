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
import { CreateLuApplicationCohortArgs } from "./CreateLuApplicationCohortArgs";
import { UpdateLuApplicationCohortArgs } from "./UpdateLuApplicationCohortArgs";
import { DeleteLuApplicationCohortArgs } from "./DeleteLuApplicationCohortArgs";
import { LuApplicationCohortCountArgs } from "./LuApplicationCohortCountArgs";
import { LuApplicationCohortFindManyArgs } from "./LuApplicationCohortFindManyArgs";
import { LuApplicationCohortFindUniqueArgs } from "./LuApplicationCohortFindUniqueArgs";
import { LuApplicationCohort } from "./LuApplicationCohort";
import { Application } from "../../application/base/Application";
import { LuApplicationCohortService } from "../luApplicationCohort.service";
@graphql.Resolver(() => LuApplicationCohort)
export class LuApplicationCohortResolverBase {
  constructor(protected readonly service: LuApplicationCohortService) {}

  async _luApplicationCohortsMeta(
    @graphql.Args() args: LuApplicationCohortCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LuApplicationCohort])
  async luApplicationCohorts(
    @graphql.Args() args: LuApplicationCohortFindManyArgs
  ): Promise<LuApplicationCohort[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => LuApplicationCohort, { nullable: true })
  async luApplicationCohort(
    @graphql.Args() args: LuApplicationCohortFindUniqueArgs
  ): Promise<LuApplicationCohort | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LuApplicationCohort)
  async createLuApplicationCohort(
    @graphql.Args() args: CreateLuApplicationCohortArgs
  ): Promise<LuApplicationCohort> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        application: {
          connect: args.data.application,
        },
      },
    });
  }

  @graphql.Mutation(() => LuApplicationCohort)
  async updateLuApplicationCohort(
    @graphql.Args() args: UpdateLuApplicationCohortArgs
  ): Promise<LuApplicationCohort | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          application: {
            connect: args.data.application,
          },
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

  @graphql.Mutation(() => LuApplicationCohort)
  async deleteLuApplicationCohort(
    @graphql.Args() args: DeleteLuApplicationCohortArgs
  ): Promise<LuApplicationCohort | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  async resolveFieldApplication(
    @graphql.Parent() parent: LuApplicationCohort
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
