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
import { CreateDietrichFinancialSupportArgs } from "./CreateDietrichFinancialSupportArgs";
import { UpdateDietrichFinancialSupportArgs } from "./UpdateDietrichFinancialSupportArgs";
import { DeleteDietrichFinancialSupportArgs } from "./DeleteDietrichFinancialSupportArgs";
import { DietrichFinancialSupportCountArgs } from "./DietrichFinancialSupportCountArgs";
import { DietrichFinancialSupportFindManyArgs } from "./DietrichFinancialSupportFindManyArgs";
import { DietrichFinancialSupportFindUniqueArgs } from "./DietrichFinancialSupportFindUniqueArgs";
import { DietrichFinancialSupport } from "./DietrichFinancialSupport";
import { DietrichFinancialSupportService } from "../dietrichFinancialSupport.service";
@graphql.Resolver(() => DietrichFinancialSupport)
export class DietrichFinancialSupportResolverBase {
  constructor(protected readonly service: DietrichFinancialSupportService) {}

  async _dietrichFinancialSupportsMeta(
    @graphql.Args() args: DietrichFinancialSupportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DietrichFinancialSupport])
  async dietrichFinancialSupports(
    @graphql.Args() args: DietrichFinancialSupportFindManyArgs
  ): Promise<DietrichFinancialSupport[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => DietrichFinancialSupport, { nullable: true })
  async dietrichFinancialSupport(
    @graphql.Args() args: DietrichFinancialSupportFindUniqueArgs
  ): Promise<DietrichFinancialSupport | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DietrichFinancialSupport)
  async createDietrichFinancialSupport(
    @graphql.Args() args: CreateDietrichFinancialSupportArgs
  ): Promise<DietrichFinancialSupport> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DietrichFinancialSupport)
  async updateDietrichFinancialSupport(
    @graphql.Args() args: UpdateDietrichFinancialSupportArgs
  ): Promise<DietrichFinancialSupport | null> {
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

  @graphql.Mutation(() => DietrichFinancialSupport)
  async deleteDietrichFinancialSupport(
    @graphql.Args() args: DeleteDietrichFinancialSupportArgs
  ): Promise<DietrichFinancialSupport | null> {
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
