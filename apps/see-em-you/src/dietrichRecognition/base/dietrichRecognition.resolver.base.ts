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
import { DietrichRecognition } from "./DietrichRecognition";
import { DietrichRecognitionCountArgs } from "./DietrichRecognitionCountArgs";
import { DietrichRecognitionFindManyArgs } from "./DietrichRecognitionFindManyArgs";
import { DietrichRecognitionFindUniqueArgs } from "./DietrichRecognitionFindUniqueArgs";
import { CreateDietrichRecognitionArgs } from "./CreateDietrichRecognitionArgs";
import { UpdateDietrichRecognitionArgs } from "./UpdateDietrichRecognitionArgs";
import { DeleteDietrichRecognitionArgs } from "./DeleteDietrichRecognitionArgs";
import { DietrichRecognitionService } from "../dietrichRecognition.service";
@graphql.Resolver(() => DietrichRecognition)
export class DietrichRecognitionResolverBase {
  constructor(protected readonly service: DietrichRecognitionService) {}

  async _dietrichRecognitionsMeta(
    @graphql.Args() args: DietrichRecognitionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DietrichRecognition])
  async dietrichRecognitions(
    @graphql.Args() args: DietrichRecognitionFindManyArgs
  ): Promise<DietrichRecognition[]> {
    return this.service.dietrichRecognitions(args);
  }

  @graphql.Query(() => DietrichRecognition, { nullable: true })
  async dietrichRecognition(
    @graphql.Args() args: DietrichRecognitionFindUniqueArgs
  ): Promise<DietrichRecognition | null> {
    const result = await this.service.dietrichRecognition(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DietrichRecognition)
  async createDietrichRecognition(
    @graphql.Args() args: CreateDietrichRecognitionArgs
  ): Promise<DietrichRecognition> {
    return await this.service.createDietrichRecognition({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DietrichRecognition)
  async updateDietrichRecognition(
    @graphql.Args() args: UpdateDietrichRecognitionArgs
  ): Promise<DietrichRecognition | null> {
    try {
      return await this.service.updateDietrichRecognition({
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

  @graphql.Mutation(() => DietrichRecognition)
  async deleteDietrichRecognition(
    @graphql.Args() args: DeleteDietrichRecognitionArgs
  ): Promise<DietrichRecognition | null> {
    try {
      return await this.service.deleteDietrichRecognition(args);
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
