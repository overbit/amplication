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
import { DisabilityType } from "./DisabilityType";
import { DisabilityTypeCountArgs } from "./DisabilityTypeCountArgs";
import { DisabilityTypeFindManyArgs } from "./DisabilityTypeFindManyArgs";
import { DisabilityTypeFindUniqueArgs } from "./DisabilityTypeFindUniqueArgs";
import { CreateDisabilityTypeArgs } from "./CreateDisabilityTypeArgs";
import { UpdateDisabilityTypeArgs } from "./UpdateDisabilityTypeArgs";
import { DeleteDisabilityTypeArgs } from "./DeleteDisabilityTypeArgs";
import { DisabilityTypeService } from "../disabilityType.service";
@graphql.Resolver(() => DisabilityType)
export class DisabilityTypeResolverBase {
  constructor(protected readonly service: DisabilityTypeService) {}

  async _disabilityTypesMeta(
    @graphql.Args() args: DisabilityTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DisabilityType])
  async disabilityTypes(
    @graphql.Args() args: DisabilityTypeFindManyArgs
  ): Promise<DisabilityType[]> {
    return this.service.disabilityTypes(args);
  }

  @graphql.Query(() => DisabilityType, { nullable: true })
  async disabilityType(
    @graphql.Args() args: DisabilityTypeFindUniqueArgs
  ): Promise<DisabilityType | null> {
    const result = await this.service.disabilityType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DisabilityType)
  async createDisabilityType(
    @graphql.Args() args: CreateDisabilityTypeArgs
  ): Promise<DisabilityType> {
    return await this.service.createDisabilityType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DisabilityType)
  async updateDisabilityType(
    @graphql.Args() args: UpdateDisabilityTypeArgs
  ): Promise<DisabilityType | null> {
    try {
      return await this.service.updateDisabilityType({
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

  @graphql.Mutation(() => DisabilityType)
  async deleteDisabilityType(
    @graphql.Args() args: DeleteDisabilityTypeArgs
  ): Promise<DisabilityType | null> {
    try {
      return await this.service.deleteDisabilityType(args);
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
