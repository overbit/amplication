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
import { VoucherProgram } from "./VoucherProgram";
import { VoucherProgramCountArgs } from "./VoucherProgramCountArgs";
import { VoucherProgramFindManyArgs } from "./VoucherProgramFindManyArgs";
import { VoucherProgramFindUniqueArgs } from "./VoucherProgramFindUniqueArgs";
import { CreateVoucherProgramArgs } from "./CreateVoucherProgramArgs";
import { UpdateVoucherProgramArgs } from "./UpdateVoucherProgramArgs";
import { DeleteVoucherProgramArgs } from "./DeleteVoucherProgramArgs";
import { VoucherProgramService } from "../voucherProgram.service";
@graphql.Resolver(() => VoucherProgram)
export class VoucherProgramResolverBase {
  constructor(protected readonly service: VoucherProgramService) {}

  async _voucherProgramsMeta(
    @graphql.Args() args: VoucherProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [VoucherProgram])
  async voucherPrograms(
    @graphql.Args() args: VoucherProgramFindManyArgs
  ): Promise<VoucherProgram[]> {
    return this.service.voucherPrograms(args);
  }

  @graphql.Query(() => VoucherProgram, { nullable: true })
  async voucherProgram(
    @graphql.Args() args: VoucherProgramFindUniqueArgs
  ): Promise<VoucherProgram | null> {
    const result = await this.service.voucherProgram(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VoucherProgram)
  async createVoucherProgram(
    @graphql.Args() args: CreateVoucherProgramArgs
  ): Promise<VoucherProgram> {
    return await this.service.createVoucherProgram({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => VoucherProgram)
  async updateVoucherProgram(
    @graphql.Args() args: UpdateVoucherProgramArgs
  ): Promise<VoucherProgram | null> {
    try {
      return await this.service.updateVoucherProgram({
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

  @graphql.Mutation(() => VoucherProgram)
  async deleteVoucherProgram(
    @graphql.Args() args: DeleteVoucherProgramArgs
  ): Promise<VoucherProgram | null> {
    try {
      return await this.service.deleteVoucherProgram(args);
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
