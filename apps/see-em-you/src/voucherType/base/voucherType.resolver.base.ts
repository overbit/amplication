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
import { CreateVoucherTypeArgs } from "./CreateVoucherTypeArgs";
import { UpdateVoucherTypeArgs } from "./UpdateVoucherTypeArgs";
import { DeleteVoucherTypeArgs } from "./DeleteVoucherTypeArgs";
import { VoucherTypeCountArgs } from "./VoucherTypeCountArgs";
import { VoucherTypeFindManyArgs } from "./VoucherTypeFindManyArgs";
import { VoucherTypeFindUniqueArgs } from "./VoucherTypeFindUniqueArgs";
import { VoucherType } from "./VoucherType";
import { VoucherTypeService } from "../voucherType.service";
@graphql.Resolver(() => VoucherType)
export class VoucherTypeResolverBase {
  constructor(protected readonly service: VoucherTypeService) {}

  async _voucherTypesMeta(
    @graphql.Args() args: VoucherTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VoucherType])
  async voucherTypes(
    @graphql.Args() args: VoucherTypeFindManyArgs
  ): Promise<VoucherType[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => VoucherType, { nullable: true })
  async voucherType(
    @graphql.Args() args: VoucherTypeFindUniqueArgs
  ): Promise<VoucherType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VoucherType)
  async createVoucherType(
    @graphql.Args() args: CreateVoucherTypeArgs
  ): Promise<VoucherType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => VoucherType)
  async updateVoucherType(
    @graphql.Args() args: UpdateVoucherTypeArgs
  ): Promise<VoucherType | null> {
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

  @graphql.Mutation(() => VoucherType)
  async deleteVoucherType(
    @graphql.Args() args: DeleteVoucherTypeArgs
  ): Promise<VoucherType | null> {
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
