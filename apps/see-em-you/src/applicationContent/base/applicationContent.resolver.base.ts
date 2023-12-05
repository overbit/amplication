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
import { ApplicationContent } from "./ApplicationContent";
import { ApplicationContentCountArgs } from "./ApplicationContentCountArgs";
import { ApplicationContentFindManyArgs } from "./ApplicationContentFindManyArgs";
import { ApplicationContentFindUniqueArgs } from "./ApplicationContentFindUniqueArgs";
import { CreateApplicationContentArgs } from "./CreateApplicationContentArgs";
import { UpdateApplicationContentArgs } from "./UpdateApplicationContentArgs";
import { DeleteApplicationContentArgs } from "./DeleteApplicationContentArgs";
import { ApplicationContentService } from "../applicationContent.service";
@graphql.Resolver(() => ApplicationContent)
export class ApplicationContentResolverBase {
  constructor(protected readonly service: ApplicationContentService) {}

  async _applicationContentsMeta(
    @graphql.Args() args: ApplicationContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApplicationContent])
  async applicationContents(
    @graphql.Args() args: ApplicationContentFindManyArgs
  ): Promise<ApplicationContent[]> {
    return this.service.applicationContents(args);
  }

  @graphql.Query(() => ApplicationContent, { nullable: true })
  async applicationContent(
    @graphql.Args() args: ApplicationContentFindUniqueArgs
  ): Promise<ApplicationContent | null> {
    const result = await this.service.applicationContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApplicationContent)
  async createApplicationContent(
    @graphql.Args() args: CreateApplicationContentArgs
  ): Promise<ApplicationContent> {
    return await this.service.createApplicationContent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ApplicationContent)
  async updateApplicationContent(
    @graphql.Args() args: UpdateApplicationContentArgs
  ): Promise<ApplicationContent | null> {
    try {
      return await this.service.updateApplicationContent({
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

  @graphql.Mutation(() => ApplicationContent)
  async deleteApplicationContent(
    @graphql.Args() args: DeleteApplicationContentArgs
  ): Promise<ApplicationContent | null> {
    try {
      return await this.service.deleteApplicationContent(args);
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
