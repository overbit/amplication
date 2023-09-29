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
import { CreateIpedsEthnicityArgs } from "./CreateIpedsEthnicityArgs";
import { UpdateIpedsEthnicityArgs } from "./UpdateIpedsEthnicityArgs";
import { DeleteIpedsEthnicityArgs } from "./DeleteIpedsEthnicityArgs";
import { IpedsEthnicityCountArgs } from "./IpedsEthnicityCountArgs";
import { IpedsEthnicityFindManyArgs } from "./IpedsEthnicityFindManyArgs";
import { IpedsEthnicityFindUniqueArgs } from "./IpedsEthnicityFindUniqueArgs";
import { IpedsEthnicity } from "./IpedsEthnicity";
import { IpedsEthnicityService } from "../ipedsEthnicity.service";
@graphql.Resolver(() => IpedsEthnicity)
export class IpedsEthnicityResolverBase {
  constructor(protected readonly service: IpedsEthnicityService) {}

  async _ipedsEthnicitiesMeta(
    @graphql.Args() args: IpedsEthnicityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IpedsEthnicity])
  async ipedsEthnicities(
    @graphql.Args() args: IpedsEthnicityFindManyArgs
  ): Promise<IpedsEthnicity[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IpedsEthnicity, { nullable: true })
  async ipedsEthnicity(
    @graphql.Args() args: IpedsEthnicityFindUniqueArgs
  ): Promise<IpedsEthnicity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IpedsEthnicity)
  async createIpedsEthnicity(
    @graphql.Args() args: CreateIpedsEthnicityArgs
  ): Promise<IpedsEthnicity> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => IpedsEthnicity)
  async updateIpedsEthnicity(
    @graphql.Args() args: UpdateIpedsEthnicityArgs
  ): Promise<IpedsEthnicity | null> {
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

  @graphql.Mutation(() => IpedsEthnicity)
  async deleteIpedsEthnicity(
    @graphql.Args() args: DeleteIpedsEthnicityArgs
  ): Promise<IpedsEthnicity | null> {
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
