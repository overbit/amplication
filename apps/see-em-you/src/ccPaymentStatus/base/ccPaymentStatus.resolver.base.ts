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
import { CreateCcPaymentStatusArgs } from "./CreateCcPaymentStatusArgs";
import { UpdateCcPaymentStatusArgs } from "./UpdateCcPaymentStatusArgs";
import { DeleteCcPaymentStatusArgs } from "./DeleteCcPaymentStatusArgs";
import { CcPaymentStatusCountArgs } from "./CcPaymentStatusCountArgs";
import { CcPaymentStatusFindManyArgs } from "./CcPaymentStatusFindManyArgs";
import { CcPaymentStatusFindUniqueArgs } from "./CcPaymentStatusFindUniqueArgs";
import { CcPaymentStatus } from "./CcPaymentStatus";
import { CcPaymentStatusService } from "../ccPaymentStatus.service";
@graphql.Resolver(() => CcPaymentStatus)
export class CcPaymentStatusResolverBase {
  constructor(protected readonly service: CcPaymentStatusService) {}

  async _ccPaymentStatusesMeta(
    @graphql.Args() args: CcPaymentStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CcPaymentStatus])
  async ccPaymentStatuses(
    @graphql.Args() args: CcPaymentStatusFindManyArgs
  ): Promise<CcPaymentStatus[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CcPaymentStatus, { nullable: true })
  async ccPaymentStatus(
    @graphql.Args() args: CcPaymentStatusFindUniqueArgs
  ): Promise<CcPaymentStatus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CcPaymentStatus)
  async createCcPaymentStatus(
    @graphql.Args() args: CreateCcPaymentStatusArgs
  ): Promise<CcPaymentStatus> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CcPaymentStatus)
  async updateCcPaymentStatus(
    @graphql.Args() args: UpdateCcPaymentStatusArgs
  ): Promise<CcPaymentStatus | null> {
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

  @graphql.Mutation(() => CcPaymentStatus)
  async deleteCcPaymentStatus(
    @graphql.Args() args: DeleteCcPaymentStatusArgs
  ): Promise<CcPaymentStatus | null> {
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
