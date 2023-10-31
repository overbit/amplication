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
import { CreateDomainArgs } from "./CreateDomainArgs";
import { UpdateDomainArgs } from "./UpdateDomainArgs";
import { DeleteDomainArgs } from "./DeleteDomainArgs";
import { DomainCountArgs } from "./DomainCountArgs";
import { DomainFindManyArgs } from "./DomainFindManyArgs";
import { DomainFindUniqueArgs } from "./DomainFindUniqueArgs";
import { Domain } from "./Domain";
import { DomainUnitFindManyArgs } from "../../domainUnit/base/DomainUnitFindManyArgs";
import { DomainUnit } from "../../domainUnit/base/DomainUnit";
import { DomainService } from "../domain.service";
@graphql.Resolver(() => Domain)
export class DomainResolverBase {
  constructor(protected readonly service: DomainService) {}

  async _domainsMeta(
    @graphql.Args() args: DomainCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Domain])
  async domains(@graphql.Args() args: DomainFindManyArgs): Promise<Domain[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Domain, { nullable: true })
  async domain(
    @graphql.Args() args: DomainFindUniqueArgs
  ): Promise<Domain | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Domain)
  async createDomain(@graphql.Args() args: CreateDomainArgs): Promise<Domain> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Domain)
  async updateDomain(
    @graphql.Args() args: UpdateDomainArgs
  ): Promise<Domain | null> {
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

  @graphql.Mutation(() => Domain)
  async deleteDomain(
    @graphql.Args() args: DeleteDomainArgs
  ): Promise<Domain | null> {
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

  @graphql.ResolveField(() => [DomainUnit], { name: "domainUnit" })
  async resolveFieldDomainUnit(
    @graphql.Parent() parent: Domain,
    @graphql.Args() args: DomainUnitFindManyArgs
  ): Promise<DomainUnit[]> {
    const results = await this.service.findDomainUnit(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
