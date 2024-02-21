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
import { BfDepartment } from "./BfDepartment";
import { BfDepartmentCountArgs } from "./BfDepartmentCountArgs";
import { BfDepartmentFindManyArgs } from "./BfDepartmentFindManyArgs";
import { BfDepartmentFindUniqueArgs } from "./BfDepartmentFindUniqueArgs";
import { CreateBfDepartmentArgs } from "./CreateBfDepartmentArgs";
import { UpdateBfDepartmentArgs } from "./UpdateBfDepartmentArgs";
import { DeleteBfDepartmentArgs } from "./DeleteBfDepartmentArgs";
import { BfDepartmentService } from "../bfDepartment.service";
@graphql.Resolver(() => BfDepartment)
export class BfDepartmentResolverBase {
  constructor(protected readonly service: BfDepartmentService) {}

  async _bfDepartmentsMeta(
    @graphql.Args() args: BfDepartmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BfDepartment])
  async bfDepartments(
    @graphql.Args() args: BfDepartmentFindManyArgs
  ): Promise<BfDepartment[]> {
    return this.service.bfDepartments(args);
  }

  @graphql.Query(() => BfDepartment, { nullable: true })
  async bfDepartment(
    @graphql.Args() args: BfDepartmentFindUniqueArgs
  ): Promise<BfDepartment | null> {
    const result = await this.service.bfDepartment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BfDepartment)
  async createBfDepartment(
    @graphql.Args() args: CreateBfDepartmentArgs
  ): Promise<BfDepartment> {
    return await this.service.createBfDepartment({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BfDepartment)
  async updateBfDepartment(
    @graphql.Args() args: UpdateBfDepartmentArgs
  ): Promise<BfDepartment | null> {
    try {
      return await this.service.updateBfDepartment({
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

  @graphql.Mutation(() => BfDepartment)
  async deleteBfDepartment(
    @graphql.Args() args: DeleteBfDepartmentArgs
  ): Promise<BfDepartment | null> {
    try {
      return await this.service.deleteBfDepartment(args);
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
