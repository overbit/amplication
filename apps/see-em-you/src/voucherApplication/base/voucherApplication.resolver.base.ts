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
import { CreateVoucherApplicationArgs } from "./CreateVoucherApplicationArgs";
import { UpdateVoucherApplicationArgs } from "./UpdateVoucherApplicationArgs";
import { DeleteVoucherApplicationArgs } from "./DeleteVoucherApplicationArgs";
import { VoucherApplicationCountArgs } from "./VoucherApplicationCountArgs";
import { VoucherApplicationFindManyArgs } from "./VoucherApplicationFindManyArgs";
import { VoucherApplicationFindUniqueArgs } from "./VoucherApplicationFindUniqueArgs";
import { VoucherApplication } from "./VoucherApplication";
import { VoucherApplicationService } from "../voucherApplication.service";
@graphql.Resolver(() => VoucherApplication)
export class VoucherApplicationResolverBase {
  constructor(protected readonly service: VoucherApplicationService) {}

  async _voucherApplicationsMeta(
    @graphql.Args() args: VoucherApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VoucherApplication])
  async voucherApplications(
    @graphql.Args() args: VoucherApplicationFindManyArgs
  ): Promise<VoucherApplication[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => VoucherApplication, { nullable: true })
  async voucherApplication(
    @graphql.Args() args: VoucherApplicationFindUniqueArgs
  ): Promise<VoucherApplication | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VoucherApplication)
  async createVoucherApplication(
    @graphql.Args() args: CreateVoucherApplicationArgs
  ): Promise<VoucherApplication> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => VoucherApplication)
  async updateVoucherApplication(
    @graphql.Args() args: UpdateVoucherApplicationArgs
  ): Promise<VoucherApplication | null> {
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

  @graphql.Mutation(() => VoucherApplication)
  async deleteVoucherApplication(
    @graphql.Args() args: DeleteVoucherApplicationArgs
  ): Promise<VoucherApplication | null> {
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
