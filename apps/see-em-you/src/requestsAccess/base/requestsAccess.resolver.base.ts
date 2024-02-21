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
import { RequestsAccess } from "./RequestsAccess";
import { RequestsAccessCountArgs } from "./RequestsAccessCountArgs";
import { RequestsAccessFindManyArgs } from "./RequestsAccessFindManyArgs";
import { RequestsAccessFindUniqueArgs } from "./RequestsAccessFindUniqueArgs";
import { CreateRequestsAccessArgs } from "./CreateRequestsAccessArgs";
import { UpdateRequestsAccessArgs } from "./UpdateRequestsAccessArgs";
import { DeleteRequestsAccessArgs } from "./DeleteRequestsAccessArgs";
import { RequestsAccessService } from "../requestsAccess.service";
@graphql.Resolver(() => RequestsAccess)
export class RequestsAccessResolverBase {
  constructor(protected readonly service: RequestsAccessService) {}

  async _requestsAccessesMeta(
    @graphql.Args() args: RequestsAccessCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RequestsAccess])
  async requestsAccesses(
    @graphql.Args() args: RequestsAccessFindManyArgs
  ): Promise<RequestsAccess[]> {
    return this.service.requestsAccesses(args);
  }

  @graphql.Query(() => RequestsAccess, { nullable: true })
  async requestsAccess(
    @graphql.Args() args: RequestsAccessFindUniqueArgs
  ): Promise<RequestsAccess | null> {
    const result = await this.service.requestsAccess(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RequestsAccess)
  async createRequestsAccess(
    @graphql.Args() args: CreateRequestsAccessArgs
  ): Promise<RequestsAccess> {
    return await this.service.createRequestsAccess({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => RequestsAccess)
  async updateRequestsAccess(
    @graphql.Args() args: UpdateRequestsAccessArgs
  ): Promise<RequestsAccess | null> {
    try {
      return await this.service.updateRequestsAccess({
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

  @graphql.Mutation(() => RequestsAccess)
  async deleteRequestsAccess(
    @graphql.Args() args: DeleteRequestsAccessArgs
  ): Promise<RequestsAccess | null> {
    try {
      return await this.service.deleteRequestsAccess(args);
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
