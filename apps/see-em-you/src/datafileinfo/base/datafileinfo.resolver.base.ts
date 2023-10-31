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
import { CreateDatafileinfoArgs } from "./CreateDatafileinfoArgs";
import { UpdateDatafileinfoArgs } from "./UpdateDatafileinfoArgs";
import { DeleteDatafileinfoArgs } from "./DeleteDatafileinfoArgs";
import { DatafileinfoCountArgs } from "./DatafileinfoCountArgs";
import { DatafileinfoFindManyArgs } from "./DatafileinfoFindManyArgs";
import { DatafileinfoFindUniqueArgs } from "./DatafileinfoFindUniqueArgs";
import { Datafileinfo } from "./Datafileinfo";
import { DatafileinfoService } from "../datafileinfo.service";
@graphql.Resolver(() => Datafileinfo)
export class DatafileinfoResolverBase {
  constructor(protected readonly service: DatafileinfoService) {}

  async _datafileinfosMeta(
    @graphql.Args() args: DatafileinfoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Datafileinfo])
  async datafileinfos(
    @graphql.Args() args: DatafileinfoFindManyArgs
  ): Promise<Datafileinfo[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Datafileinfo, { nullable: true })
  async datafileinfo(
    @graphql.Args() args: DatafileinfoFindUniqueArgs
  ): Promise<Datafileinfo | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Datafileinfo)
  async createDatafileinfo(
    @graphql.Args() args: CreateDatafileinfoArgs
  ): Promise<Datafileinfo> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Datafileinfo)
  async updateDatafileinfo(
    @graphql.Args() args: UpdateDatafileinfoArgs
  ): Promise<Datafileinfo | null> {
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

  @graphql.Mutation(() => Datafileinfo)
  async deleteDatafileinfo(
    @graphql.Args() args: DeleteDatafileinfoArgs
  ): Promise<Datafileinfo | null> {
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
