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
import { Voucher } from "./Voucher";
import { VoucherCountArgs } from "./VoucherCountArgs";
import { VoucherFindManyArgs } from "./VoucherFindManyArgs";
import { VoucherFindUniqueArgs } from "./VoucherFindUniqueArgs";
import { CreateVoucherArgs } from "./CreateVoucherArgs";
import { UpdateVoucherArgs } from "./UpdateVoucherArgs";
import { DeleteVoucherArgs } from "./DeleteVoucherArgs";
import { VoucherService } from "../voucher.service";
@graphql.Resolver(() => Voucher)
export class VoucherResolverBase {
  constructor(protected readonly service: VoucherService) {}

  async _vouchersMeta(
    @graphql.Args() args: VoucherCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Voucher])
  async vouchers(
    @graphql.Args() args: VoucherFindManyArgs
  ): Promise<Voucher[]> {
    return this.service.vouchers(args);
  }

  @graphql.Query(() => Voucher, { nullable: true })
  async voucher(
    @graphql.Args() args: VoucherFindUniqueArgs
  ): Promise<Voucher | null> {
    const result = await this.service.voucher(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Voucher)
  async createVoucher(
    @graphql.Args() args: CreateVoucherArgs
  ): Promise<Voucher> {
    return await this.service.createVoucher({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Voucher)
  async updateVoucher(
    @graphql.Args() args: UpdateVoucherArgs
  ): Promise<Voucher | null> {
    try {
      return await this.service.updateVoucher({
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

  @graphql.Mutation(() => Voucher)
  async deleteVoucher(
    @graphql.Args() args: DeleteVoucherArgs
  ): Promise<Voucher | null> {
    try {
      return await this.service.deleteVoucher(args);
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
