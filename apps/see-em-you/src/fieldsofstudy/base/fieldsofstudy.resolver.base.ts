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
import { CreateFieldsofstudyArgs } from "./CreateFieldsofstudyArgs";
import { UpdateFieldsofstudyArgs } from "./UpdateFieldsofstudyArgs";
import { DeleteFieldsofstudyArgs } from "./DeleteFieldsofstudyArgs";
import { FieldsofstudyCountArgs } from "./FieldsofstudyCountArgs";
import { FieldsofstudyFindManyArgs } from "./FieldsofstudyFindManyArgs";
import { FieldsofstudyFindUniqueArgs } from "./FieldsofstudyFindUniqueArgs";
import { Fieldsofstudy } from "./Fieldsofstudy";
import { ProgramModelFindManyArgs } from "../../programModel/base/ProgramModelFindManyArgs";
import { ProgramModel } from "../../programModel/base/ProgramModel";
import { FieldsofstudyService } from "../fieldsofstudy.service";
@graphql.Resolver(() => Fieldsofstudy)
export class FieldsofstudyResolverBase {
  constructor(protected readonly service: FieldsofstudyService) {}

  async _fieldsofstudiesMeta(
    @graphql.Args() args: FieldsofstudyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Fieldsofstudy])
  async fieldsofstudies(
    @graphql.Args() args: FieldsofstudyFindManyArgs
  ): Promise<Fieldsofstudy[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Fieldsofstudy, { nullable: true })
  async fieldsofstudy(
    @graphql.Args() args: FieldsofstudyFindUniqueArgs
  ): Promise<Fieldsofstudy | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Fieldsofstudy)
  async createFieldsofstudy(
    @graphql.Args() args: CreateFieldsofstudyArgs
  ): Promise<Fieldsofstudy> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Fieldsofstudy)
  async updateFieldsofstudy(
    @graphql.Args() args: UpdateFieldsofstudyArgs
  ): Promise<Fieldsofstudy | null> {
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

  @graphql.Mutation(() => Fieldsofstudy)
  async deleteFieldsofstudy(
    @graphql.Args() args: DeleteFieldsofstudyArgs
  ): Promise<Fieldsofstudy | null> {
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

  @graphql.ResolveField(() => [ProgramModel], { name: "programs" })
  async resolveFieldPrograms(
    @graphql.Parent() parent: Fieldsofstudy,
    @graphql.Args() args: ProgramModelFindManyArgs
  ): Promise<ProgramModel[]> {
    const results = await this.service.findPrograms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
