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
import { Em2Sop } from "./Em2Sop";
import { Em2SopCountArgs } from "./Em2SopCountArgs";
import { Em2SopFindManyArgs } from "./Em2SopFindManyArgs";
import { Em2SopFindUniqueArgs } from "./Em2SopFindUniqueArgs";
import { CreateEm2SopArgs } from "./CreateEm2SopArgs";
import { UpdateEm2SopArgs } from "./UpdateEm2SopArgs";
import { DeleteEm2SopArgs } from "./DeleteEm2SopArgs";
import { Em2SopService } from "../em2Sop.service";
@graphql.Resolver(() => Em2Sop)
export class Em2SopResolverBase {
  constructor(protected readonly service: Em2SopService) {}

  async _em2SopsMeta(
    @graphql.Args() args: Em2SopCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Em2Sop])
  async em2Sops(@graphql.Args() args: Em2SopFindManyArgs): Promise<Em2Sop[]> {
    return this.service.em2Sops(args);
  }

  @graphql.Query(() => Em2Sop, { nullable: true })
  async em2Sop(
    @graphql.Args() args: Em2SopFindUniqueArgs
  ): Promise<Em2Sop | null> {
    const result = await this.service.em2Sop(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Em2Sop)
  async createEm2Sop(@graphql.Args() args: CreateEm2SopArgs): Promise<Em2Sop> {
    return await this.service.createEm2Sop({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Em2Sop)
  async updateEm2Sop(
    @graphql.Args() args: UpdateEm2SopArgs
  ): Promise<Em2Sop | null> {
    try {
      return await this.service.updateEm2Sop({
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

  @graphql.Mutation(() => Em2Sop)
  async deleteEm2Sop(
    @graphql.Args() args: DeleteEm2SopArgs
  ): Promise<Em2Sop | null> {
    try {
      return await this.service.deleteEm2Sop(args);
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
