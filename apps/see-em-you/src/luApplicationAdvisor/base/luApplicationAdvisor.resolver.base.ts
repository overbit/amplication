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
import { LuApplicationAdvisor } from "./LuApplicationAdvisor";
import { LuApplicationAdvisorCountArgs } from "./LuApplicationAdvisorCountArgs";
import { LuApplicationAdvisorFindManyArgs } from "./LuApplicationAdvisorFindManyArgs";
import { LuApplicationAdvisorFindUniqueArgs } from "./LuApplicationAdvisorFindUniqueArgs";
import { CreateLuApplicationAdvisorArgs } from "./CreateLuApplicationAdvisorArgs";
import { UpdateLuApplicationAdvisorArgs } from "./UpdateLuApplicationAdvisorArgs";
import { DeleteLuApplicationAdvisorArgs } from "./DeleteLuApplicationAdvisorArgs";
import { Application } from "../../application/base/Application";
import { LuApplicationAdvisorService } from "../luApplicationAdvisor.service";
@graphql.Resolver(() => LuApplicationAdvisor)
export class LuApplicationAdvisorResolverBase {
  constructor(protected readonly service: LuApplicationAdvisorService) {}

  async _luApplicationAdvisorsMeta(
    @graphql.Args() args: LuApplicationAdvisorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LuApplicationAdvisor])
  async luApplicationAdvisors(
    @graphql.Args() args: LuApplicationAdvisorFindManyArgs
  ): Promise<LuApplicationAdvisor[]> {
    return this.service.luApplicationAdvisors(args);
  }

  @graphql.Query(() => LuApplicationAdvisor, { nullable: true })
  async luApplicationAdvisor(
    @graphql.Args() args: LuApplicationAdvisorFindUniqueArgs
  ): Promise<LuApplicationAdvisor | null> {
    const result = await this.service.luApplicationAdvisor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LuApplicationAdvisor)
  async createLuApplicationAdvisor(
    @graphql.Args() args: CreateLuApplicationAdvisorArgs
  ): Promise<LuApplicationAdvisor> {
    return await this.service.createLuApplicationAdvisor({
      ...args,
      data: {
        ...args.data,

        application: {
          connect: args.data.application,
        },
      },
    });
  }

  @graphql.Mutation(() => LuApplicationAdvisor)
  async updateLuApplicationAdvisor(
    @graphql.Args() args: UpdateLuApplicationAdvisorArgs
  ): Promise<LuApplicationAdvisor | null> {
    try {
      return await this.service.updateLuApplicationAdvisor({
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

  @graphql.Mutation(() => LuApplicationAdvisor)
  async deleteLuApplicationAdvisor(
    @graphql.Args() args: DeleteLuApplicationAdvisorArgs
  ): Promise<LuApplicationAdvisor | null> {
    try {
      return await this.service.deleteLuApplicationAdvisor(args);
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
  async getApplication(
    @graphql.Parent() parent: LuApplicationAdvisor
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
