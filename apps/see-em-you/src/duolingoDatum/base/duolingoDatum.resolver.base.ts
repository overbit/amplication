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
import { CreateDuolingoDatumArgs } from "./CreateDuolingoDatumArgs";
import { UpdateDuolingoDatumArgs } from "./UpdateDuolingoDatumArgs";
import { DeleteDuolingoDatumArgs } from "./DeleteDuolingoDatumArgs";
import { DuolingoDatumCountArgs } from "./DuolingoDatumCountArgs";
import { DuolingoDatumFindManyArgs } from "./DuolingoDatumFindManyArgs";
import { DuolingoDatumFindUniqueArgs } from "./DuolingoDatumFindUniqueArgs";
import { DuolingoDatum } from "./DuolingoDatum";
import { DuolingoDatumService } from "../duolingoDatum.service";
@graphql.Resolver(() => DuolingoDatum)
export class DuolingoDatumResolverBase {
  constructor(protected readonly service: DuolingoDatumService) {}

  async _duolingoDataMeta(
    @graphql.Args() args: DuolingoDatumCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DuolingoDatum])
  async duolingoData(
    @graphql.Args() args: DuolingoDatumFindManyArgs
  ): Promise<DuolingoDatum[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => DuolingoDatum, { nullable: true })
  async duolingoDatum(
    @graphql.Args() args: DuolingoDatumFindUniqueArgs
  ): Promise<DuolingoDatum | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DuolingoDatum)
  async createDuolingoDatum(
    @graphql.Args() args: CreateDuolingoDatumArgs
  ): Promise<DuolingoDatum> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DuolingoDatum)
  async updateDuolingoDatum(
    @graphql.Args() args: UpdateDuolingoDatumArgs
  ): Promise<DuolingoDatum | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => DuolingoDatum)
  async deleteDuolingoDatum(
    @graphql.Args() args: DeleteDuolingoDatumArgs
  ): Promise<DuolingoDatum | null> {
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
}
