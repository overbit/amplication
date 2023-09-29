/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateGmatscoreArgs } from "./CreateGmatscoreArgs";
import { UpdateGmatscoreArgs } from "./UpdateGmatscoreArgs";
import { DeleteGmatscoreArgs } from "./DeleteGmatscoreArgs";
import { GmatscoreCountArgs } from "./GmatscoreCountArgs";
import { GmatscoreFindManyArgs } from "./GmatscoreFindManyArgs";
import { GmatscoreFindUniqueArgs } from "./GmatscoreFindUniqueArgs";
import { Gmatscore } from "./Gmatscore";
import { Application } from "../../application/base/Application";
import { GmatscoreService } from "../gmatscore.service";
@graphql.Resolver(() => Gmatscore)
export class GmatscoreResolverBase {
  constructor(protected readonly service: GmatscoreService) {}

  async _gmatscoresMeta(
    @graphql.Args() args: GmatscoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Gmatscore])
  async gmatscores(
    @graphql.Args() args: GmatscoreFindManyArgs
  ): Promise<Gmatscore[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Gmatscore, { nullable: true })
  async gmatscore(
    @graphql.Args() args: GmatscoreFindUniqueArgs
  ): Promise<Gmatscore | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Gmatscore)
  async createGmatscore(
    @graphql.Args() args: CreateGmatscoreArgs
  ): Promise<Gmatscore> {
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

  @graphql.Mutation(() => Gmatscore)
  async updateGmatscore(
    @graphql.Args() args: UpdateGmatscoreArgs
  ): Promise<Gmatscore | null> {
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
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Gmatscore)
  async deleteGmatscore(
    @graphql.Args() args: DeleteGmatscoreArgs
  ): Promise<Gmatscore | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
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
    @graphql.Parent() parent: Gmatscore
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
