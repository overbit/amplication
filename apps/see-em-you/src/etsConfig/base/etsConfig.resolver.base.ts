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
import { CreateEtsConfigArgs } from "./CreateEtsConfigArgs";
import { UpdateEtsConfigArgs } from "./UpdateEtsConfigArgs";
import { DeleteEtsConfigArgs } from "./DeleteEtsConfigArgs";
import { EtsConfigCountArgs } from "./EtsConfigCountArgs";
import { EtsConfigFindManyArgs } from "./EtsConfigFindManyArgs";
import { EtsConfigFindUniqueArgs } from "./EtsConfigFindUniqueArgs";
import { EtsConfig } from "./EtsConfig";
import { EtsConfigService } from "../etsConfig.service";
@graphql.Resolver(() => EtsConfig)
export class EtsConfigResolverBase {
  constructor(protected readonly service: EtsConfigService) {}

  async _etsConfigsMeta(
    @graphql.Args() args: EtsConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EtsConfig])
  async etsConfigs(
    @graphql.Args() args: EtsConfigFindManyArgs
  ): Promise<EtsConfig[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => EtsConfig, { nullable: true })
  async etsConfig(
    @graphql.Args() args: EtsConfigFindUniqueArgs
  ): Promise<EtsConfig | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EtsConfig)
  async createEtsConfig(
    @graphql.Args() args: CreateEtsConfigArgs
  ): Promise<EtsConfig> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EtsConfig)
  async updateEtsConfig(
    @graphql.Args() args: UpdateEtsConfigArgs
  ): Promise<EtsConfig | null> {
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

  @graphql.Mutation(() => EtsConfig)
  async deleteEtsConfig(
    @graphql.Args() args: DeleteEtsConfigArgs
  ): Promise<EtsConfig | null> {
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
