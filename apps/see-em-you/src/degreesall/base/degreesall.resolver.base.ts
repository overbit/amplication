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
import { Degreesall } from "./Degreesall";
import { DegreesallCountArgs } from "./DegreesallCountArgs";
import { DegreesallFindManyArgs } from "./DegreesallFindManyArgs";
import { DegreesallFindUniqueArgs } from "./DegreesallFindUniqueArgs";
import { CreateDegreesallArgs } from "./CreateDegreesallArgs";
import { UpdateDegreesallArgs } from "./UpdateDegreesallArgs";
import { DeleteDegreesallArgs } from "./DeleteDegreesallArgs";
import { DegreesallService } from "../degreesall.service";
@graphql.Resolver(() => Degreesall)
export class DegreesallResolverBase {
  constructor(protected readonly service: DegreesallService) {}

  async _degreesallsMeta(
    @graphql.Args() args: DegreesallCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Degreesall])
  async degreesalls(
    @graphql.Args() args: DegreesallFindManyArgs
  ): Promise<Degreesall[]> {
    return this.service.degreesalls(args);
  }

  @graphql.Query(() => Degreesall, { nullable: true })
  async degreesall(
    @graphql.Args() args: DegreesallFindUniqueArgs
  ): Promise<Degreesall | null> {
    const result = await this.service.degreesall(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Degreesall)
  async createDegreesall(
    @graphql.Args() args: CreateDegreesallArgs
  ): Promise<Degreesall> {
    return await this.service.createDegreesall({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Degreesall)
  async updateDegreesall(
    @graphql.Args() args: UpdateDegreesallArgs
  ): Promise<Degreesall | null> {
    try {
      return await this.service.updateDegreesall({
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

  @graphql.Mutation(() => Degreesall)
  async deleteDegreesall(
    @graphql.Args() args: DeleteDegreesallArgs
  ): Promise<Degreesall | null> {
    try {
      return await this.service.deleteDegreesall(args);
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
