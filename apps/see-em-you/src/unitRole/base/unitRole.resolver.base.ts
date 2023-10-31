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
import { CreateUnitRoleArgs } from "./CreateUnitRoleArgs";
import { UpdateUnitRoleArgs } from "./UpdateUnitRoleArgs";
import { DeleteUnitRoleArgs } from "./DeleteUnitRoleArgs";
import { UnitRoleCountArgs } from "./UnitRoleCountArgs";
import { UnitRoleFindManyArgs } from "./UnitRoleFindManyArgs";
import { UnitRoleFindUniqueArgs } from "./UnitRoleFindUniqueArgs";
import { UnitRole } from "./UnitRole";
import { UnitRoleService } from "../unitRole.service";
@graphql.Resolver(() => UnitRole)
export class UnitRoleResolverBase {
  constructor(protected readonly service: UnitRoleService) {}

  async _unitRolesMeta(
    @graphql.Args() args: UnitRoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UnitRole])
  async unitRoles(
    @graphql.Args() args: UnitRoleFindManyArgs
  ): Promise<UnitRole[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => UnitRole, { nullable: true })
  async unitRole(
    @graphql.Args() args: UnitRoleFindUniqueArgs
  ): Promise<UnitRole | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UnitRole)
  async createUnitRole(
    @graphql.Args() args: CreateUnitRoleArgs
  ): Promise<UnitRole> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UnitRole)
  async updateUnitRole(
    @graphql.Args() args: UpdateUnitRoleArgs
  ): Promise<UnitRole | null> {
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

  @graphql.Mutation(() => UnitRole)
  async deleteUnitRole(
    @graphql.Args() args: DeleteUnitRoleArgs
  ): Promise<UnitRole | null> {
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
