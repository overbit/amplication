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
import { CcTransaction } from "./CcTransaction";
import { CcTransactionCountArgs } from "./CcTransactionCountArgs";
import { CcTransactionFindManyArgs } from "./CcTransactionFindManyArgs";
import { CcTransactionFindUniqueArgs } from "./CcTransactionFindUniqueArgs";
import { CreateCcTransactionArgs } from "./CreateCcTransactionArgs";
import { UpdateCcTransactionArgs } from "./UpdateCcTransactionArgs";
import { DeleteCcTransactionArgs } from "./DeleteCcTransactionArgs";
import { CcTransactionService } from "../ccTransaction.service";
@graphql.Resolver(() => CcTransaction)
export class CcTransactionResolverBase {
  constructor(protected readonly service: CcTransactionService) {}

  async _ccTransactionsMeta(
    @graphql.Args() args: CcTransactionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CcTransaction])
  async ccTransactions(
    @graphql.Args() args: CcTransactionFindManyArgs
  ): Promise<CcTransaction[]> {
    return this.service.ccTransactions(args);
  }

  @graphql.Query(() => CcTransaction, { nullable: true })
  async ccTransaction(
    @graphql.Args() args: CcTransactionFindUniqueArgs
  ): Promise<CcTransaction | null> {
    const result = await this.service.ccTransaction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CcTransaction)
  async createCcTransaction(
    @graphql.Args() args: CreateCcTransactionArgs
  ): Promise<CcTransaction> {
    return await this.service.createCcTransaction({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CcTransaction)
  async updateCcTransaction(
    @graphql.Args() args: UpdateCcTransactionArgs
  ): Promise<CcTransaction | null> {
    try {
      return await this.service.updateCcTransaction({
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

  @graphql.Mutation(() => CcTransaction)
  async deleteCcTransaction(
    @graphql.Args() args: DeleteCcTransactionArgs
  ): Promise<CcTransaction | null> {
    try {
      return await this.service.deleteCcTransaction(args);
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
