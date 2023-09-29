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
import { CreateDepartmentUnitArgs } from "./CreateDepartmentUnitArgs";
import { UpdateDepartmentUnitArgs } from "./UpdateDepartmentUnitArgs";
import { DeleteDepartmentUnitArgs } from "./DeleteDepartmentUnitArgs";
import { DepartmentUnitCountArgs } from "./DepartmentUnitCountArgs";
import { DepartmentUnitFindManyArgs } from "./DepartmentUnitFindManyArgs";
import { DepartmentUnitFindUniqueArgs } from "./DepartmentUnitFindUniqueArgs";
import { DepartmentUnit } from "./DepartmentUnit";
import { DepartmentUnitService } from "../departmentUnit.service";
@graphql.Resolver(() => DepartmentUnit)
export class DepartmentUnitResolverBase {
  constructor(protected readonly service: DepartmentUnitService) {}

  async _departmentUnitsMeta(
    @graphql.Args() args: DepartmentUnitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DepartmentUnit])
  async departmentUnits(
    @graphql.Args() args: DepartmentUnitFindManyArgs
  ): Promise<DepartmentUnit[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => DepartmentUnit, { nullable: true })
  async departmentUnit(
    @graphql.Args() args: DepartmentUnitFindUniqueArgs
  ): Promise<DepartmentUnit | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DepartmentUnit)
  async createDepartmentUnit(
    @graphql.Args() args: CreateDepartmentUnitArgs
  ): Promise<DepartmentUnit> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DepartmentUnit)
  async updateDepartmentUnit(
    @graphql.Args() args: UpdateDepartmentUnitArgs
  ): Promise<DepartmentUnit | null> {
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

  @graphql.Mutation(() => DepartmentUnit)
  async deleteDepartmentUnit(
    @graphql.Args() args: DeleteDepartmentUnitArgs
  ): Promise<DepartmentUnit | null> {
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
