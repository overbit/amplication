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
import { CreateToeflItpPlusArgs } from "./CreateToeflItpPlusArgs";
import { UpdateToeflItpPlusArgs } from "./UpdateToeflItpPlusArgs";
import { DeleteToeflItpPlusArgs } from "./DeleteToeflItpPlusArgs";
import { ToeflItpPlusCountArgs } from "./ToeflItpPlusCountArgs";
import { ToeflItpPlusFindManyArgs } from "./ToeflItpPlusFindManyArgs";
import { ToeflItpPlusFindUniqueArgs } from "./ToeflItpPlusFindUniqueArgs";
import { ToeflItpPlus } from "./ToeflItpPlus";
import { ToeflItpPlusService } from "../toeflItpPlus.service";
@graphql.Resolver(() => ToeflItpPlus)
export class ToeflItpPlusResolverBase {
  constructor(protected readonly service: ToeflItpPlusService) {}

  async _toeflItpPlusesMeta(
    @graphql.Args() args: ToeflItpPlusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ToeflItpPlus])
  async toeflItpPluses(
    @graphql.Args() args: ToeflItpPlusFindManyArgs
  ): Promise<ToeflItpPlus[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ToeflItpPlus, { nullable: true })
  async toeflItpPlus(
    @graphql.Args() args: ToeflItpPlusFindUniqueArgs
  ): Promise<ToeflItpPlus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ToeflItpPlus)
  async createToeflItpPlus(
    @graphql.Args() args: CreateToeflItpPlusArgs
  ): Promise<ToeflItpPlus> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ToeflItpPlus)
  async updateToeflItpPlus(
    @graphql.Args() args: UpdateToeflItpPlusArgs
  ): Promise<ToeflItpPlus | null> {
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

  @graphql.Mutation(() => ToeflItpPlus)
  async deleteToeflItpPlus(
    @graphql.Args() args: DeleteToeflItpPlusArgs
  ): Promise<ToeflItpPlus | null> {
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
