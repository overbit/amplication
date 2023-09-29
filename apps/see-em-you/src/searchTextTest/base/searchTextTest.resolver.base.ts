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
import { CreateSearchTextTestArgs } from "./CreateSearchTextTestArgs";
import { UpdateSearchTextTestArgs } from "./UpdateSearchTextTestArgs";
import { DeleteSearchTextTestArgs } from "./DeleteSearchTextTestArgs";
import { SearchTextTestCountArgs } from "./SearchTextTestCountArgs";
import { SearchTextTestFindManyArgs } from "./SearchTextTestFindManyArgs";
import { SearchTextTestFindUniqueArgs } from "./SearchTextTestFindUniqueArgs";
import { SearchTextTest } from "./SearchTextTest";
import { SearchTextTestService } from "../searchTextTest.service";
@graphql.Resolver(() => SearchTextTest)
export class SearchTextTestResolverBase {
  constructor(protected readonly service: SearchTextTestService) {}

  async _searchTextTestsMeta(
    @graphql.Args() args: SearchTextTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SearchTextTest])
  async searchTextTests(
    @graphql.Args() args: SearchTextTestFindManyArgs
  ): Promise<SearchTextTest[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => SearchTextTest, { nullable: true })
  async searchTextTest(
    @graphql.Args() args: SearchTextTestFindUniqueArgs
  ): Promise<SearchTextTest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SearchTextTest)
  async createSearchTextTest(
    @graphql.Args() args: CreateSearchTextTestArgs
  ): Promise<SearchTextTest> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SearchTextTest)
  async updateSearchTextTest(
    @graphql.Args() args: UpdateSearchTextTestArgs
  ): Promise<SearchTextTest | null> {
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

  @graphql.Mutation(() => SearchTextTest)
  async deleteSearchTextTest(
    @graphql.Args() args: DeleteSearchTextTestArgs
  ): Promise<SearchTextTest | null> {
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
