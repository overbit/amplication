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
import { CreateReclogArgs } from "./CreateReclogArgs";
import { UpdateReclogArgs } from "./UpdateReclogArgs";
import { DeleteReclogArgs } from "./DeleteReclogArgs";
import { ReclogCountArgs } from "./ReclogCountArgs";
import { ReclogFindManyArgs } from "./ReclogFindManyArgs";
import { ReclogFindUniqueArgs } from "./ReclogFindUniqueArgs";
import { Reclog } from "./Reclog";
import { ReclogService } from "../reclog.service";
@graphql.Resolver(() => Reclog)
export class ReclogResolverBase {
  constructor(protected readonly service: ReclogService) {}

  async _reclogsMeta(
    @graphql.Args() args: ReclogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Reclog])
  async reclogs(@graphql.Args() args: ReclogFindManyArgs): Promise<Reclog[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Reclog, { nullable: true })
  async reclog(
    @graphql.Args() args: ReclogFindUniqueArgs
  ): Promise<Reclog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reclog)
  async createReclog(@graphql.Args() args: CreateReclogArgs): Promise<Reclog> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Reclog)
  async updateReclog(
    @graphql.Args() args: UpdateReclogArgs
  ): Promise<Reclog | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Reclog)
  async deleteReclog(
    @graphql.Args() args: DeleteReclogArgs
  ): Promise<Reclog | null> {
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
}
