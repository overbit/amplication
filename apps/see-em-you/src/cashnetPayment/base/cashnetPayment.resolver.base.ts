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
import { CreateCashnetPaymentArgs } from "./CreateCashnetPaymentArgs";
import { UpdateCashnetPaymentArgs } from "./UpdateCashnetPaymentArgs";
import { DeleteCashnetPaymentArgs } from "./DeleteCashnetPaymentArgs";
import { CashnetPaymentCountArgs } from "./CashnetPaymentCountArgs";
import { CashnetPaymentFindManyArgs } from "./CashnetPaymentFindManyArgs";
import { CashnetPaymentFindUniqueArgs } from "./CashnetPaymentFindUniqueArgs";
import { CashnetPayment } from "./CashnetPayment";
import { Application } from "../../application/base/Application";
import { CashnetPaymentService } from "../cashnetPayment.service";
@graphql.Resolver(() => CashnetPayment)
export class CashnetPaymentResolverBase {
  constructor(protected readonly service: CashnetPaymentService) {}

  async _cashnetPaymentsMeta(
    @graphql.Args() args: CashnetPaymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CashnetPayment])
  async cashnetPayments(
    @graphql.Args() args: CashnetPaymentFindManyArgs
  ): Promise<CashnetPayment[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => CashnetPayment, { nullable: true })
  async cashnetPayment(
    @graphql.Args() args: CashnetPaymentFindUniqueArgs
  ): Promise<CashnetPayment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CashnetPayment)
  async createCashnetPayment(
    @graphql.Args() args: CreateCashnetPaymentArgs
  ): Promise<CashnetPayment> {
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

  @graphql.Mutation(() => CashnetPayment)
  async updateCashnetPayment(
    @graphql.Args() args: UpdateCashnetPaymentArgs
  ): Promise<CashnetPayment | null> {
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
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CashnetPayment)
  async deleteCashnetPayment(
    @graphql.Args() args: DeleteCashnetPaymentArgs
  ): Promise<CashnetPayment | null> {
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

  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  async resolveFieldApplication(
    @graphql.Parent() parent: CashnetPayment
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
