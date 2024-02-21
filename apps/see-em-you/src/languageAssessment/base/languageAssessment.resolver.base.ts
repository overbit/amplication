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
import { LanguageAssessment } from "./LanguageAssessment";
import { LanguageAssessmentCountArgs } from "./LanguageAssessmentCountArgs";
import { LanguageAssessmentFindManyArgs } from "./LanguageAssessmentFindManyArgs";
import { LanguageAssessmentFindUniqueArgs } from "./LanguageAssessmentFindUniqueArgs";
import { CreateLanguageAssessmentArgs } from "./CreateLanguageAssessmentArgs";
import { UpdateLanguageAssessmentArgs } from "./UpdateLanguageAssessmentArgs";
import { DeleteLanguageAssessmentArgs } from "./DeleteLanguageAssessmentArgs";
import { LanguageAssessmentService } from "../languageAssessment.service";
@graphql.Resolver(() => LanguageAssessment)
export class LanguageAssessmentResolverBase {
  constructor(protected readonly service: LanguageAssessmentService) {}

  async _languageAssessmentsMeta(
    @graphql.Args() args: LanguageAssessmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LanguageAssessment])
  async languageAssessments(
    @graphql.Args() args: LanguageAssessmentFindManyArgs
  ): Promise<LanguageAssessment[]> {
    return this.service.languageAssessments(args);
  }

  @graphql.Query(() => LanguageAssessment, { nullable: true })
  async languageAssessment(
    @graphql.Args() args: LanguageAssessmentFindUniqueArgs
  ): Promise<LanguageAssessment | null> {
    const result = await this.service.languageAssessment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LanguageAssessment)
  async createLanguageAssessment(
    @graphql.Args() args: CreateLanguageAssessmentArgs
  ): Promise<LanguageAssessment> {
    return await this.service.createLanguageAssessment({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LanguageAssessment)
  async updateLanguageAssessment(
    @graphql.Args() args: UpdateLanguageAssessmentArgs
  ): Promise<LanguageAssessment | null> {
    try {
      return await this.service.updateLanguageAssessment({
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

  @graphql.Mutation(() => LanguageAssessment)
  async deleteLanguageAssessment(
    @graphql.Args() args: DeleteLanguageAssessmentArgs
  ): Promise<LanguageAssessment | null> {
    try {
      return await this.service.deleteLanguageAssessment(args);
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
