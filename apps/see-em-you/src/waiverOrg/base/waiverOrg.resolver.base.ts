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
import { WaiverOrg } from "./WaiverOrg";
import { WaiverOrgCountArgs } from "./WaiverOrgCountArgs";
import { WaiverOrgFindManyArgs } from "./WaiverOrgFindManyArgs";
import { WaiverOrgFindUniqueArgs } from "./WaiverOrgFindUniqueArgs";
import { CreateWaiverOrgArgs } from "./CreateWaiverOrgArgs";
import { UpdateWaiverOrgArgs } from "./UpdateWaiverOrgArgs";
import { DeleteWaiverOrgArgs } from "./DeleteWaiverOrgArgs";
import { WaiverOrgService } from "../waiverOrg.service";
@graphql.Resolver(() => WaiverOrg)
export class WaiverOrgResolverBase {
  constructor(protected readonly service: WaiverOrgService) {}

  async _waiverOrgsMeta(
    @graphql.Args() args: WaiverOrgCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WaiverOrg])
  async waiverOrgs(
    @graphql.Args() args: WaiverOrgFindManyArgs
  ): Promise<WaiverOrg[]> {
    return this.service.waiverOrgs(args);
  }

  @graphql.Query(() => WaiverOrg, { nullable: true })
  async waiverOrg(
    @graphql.Args() args: WaiverOrgFindUniqueArgs
  ): Promise<WaiverOrg | null> {
    const result = await this.service.waiverOrg(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WaiverOrg)
  async createWaiverOrg(
    @graphql.Args() args: CreateWaiverOrgArgs
  ): Promise<WaiverOrg> {
    return await this.service.createWaiverOrg({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => WaiverOrg)
  async updateWaiverOrg(
    @graphql.Args() args: UpdateWaiverOrgArgs
  ): Promise<WaiverOrg | null> {
    try {
      return await this.service.updateWaiverOrg({
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

  @graphql.Mutation(() => WaiverOrg)
  async deleteWaiverOrg(
    @graphql.Args() args: DeleteWaiverOrgArgs
  ): Promise<WaiverOrg | null> {
    try {
      return await this.service.deleteWaiverOrg(args);
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
