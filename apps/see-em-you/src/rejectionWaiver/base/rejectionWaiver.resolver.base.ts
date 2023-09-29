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
import { CreateRejectionWaiverArgs } from "./CreateRejectionWaiverArgs";
import { UpdateRejectionWaiverArgs } from "./UpdateRejectionWaiverArgs";
import { DeleteRejectionWaiverArgs } from "./DeleteRejectionWaiverArgs";
import { RejectionWaiverCountArgs } from "./RejectionWaiverCountArgs";
import { RejectionWaiverFindManyArgs } from "./RejectionWaiverFindManyArgs";
import { RejectionWaiverFindUniqueArgs } from "./RejectionWaiverFindUniqueArgs";
import { RejectionWaiver } from "./RejectionWaiver";
import { RejectionWaiverService } from "../rejectionWaiver.service";
@graphql.Resolver(() => RejectionWaiver)
export class RejectionWaiverResolverBase {
  constructor(protected readonly service: RejectionWaiverService) {}

  async _rejectionWaiversMeta(
    @graphql.Args() args: RejectionWaiverCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RejectionWaiver])
  async rejectionWaivers(
    @graphql.Args() args: RejectionWaiverFindManyArgs
  ): Promise<RejectionWaiver[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => RejectionWaiver, { nullable: true })
  async rejectionWaiver(
    @graphql.Args() args: RejectionWaiverFindUniqueArgs
  ): Promise<RejectionWaiver | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RejectionWaiver)
  async createRejectionWaiver(
    @graphql.Args() args: CreateRejectionWaiverArgs
  ): Promise<RejectionWaiver> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => RejectionWaiver)
  async updateRejectionWaiver(
    @graphql.Args() args: UpdateRejectionWaiverArgs
  ): Promise<RejectionWaiver | null> {
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

  @graphql.Mutation(() => RejectionWaiver)
  async deleteRejectionWaiver(
    @graphql.Args() args: DeleteRejectionWaiverArgs
  ): Promise<RejectionWaiver | null> {
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
