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
import { CreateIpedsRaceArgs } from "./CreateIpedsRaceArgs";
import { UpdateIpedsRaceArgs } from "./UpdateIpedsRaceArgs";
import { DeleteIpedsRaceArgs } from "./DeleteIpedsRaceArgs";
import { IpedsRaceCountArgs } from "./IpedsRaceCountArgs";
import { IpedsRaceFindManyArgs } from "./IpedsRaceFindManyArgs";
import { IpedsRaceFindUniqueArgs } from "./IpedsRaceFindUniqueArgs";
import { IpedsRace } from "./IpedsRace";
import { IpedsRaceService } from "../ipedsRace.service";
@graphql.Resolver(() => IpedsRace)
export class IpedsRaceResolverBase {
  constructor(protected readonly service: IpedsRaceService) {}

  async _ipedsRacesMeta(
    @graphql.Args() args: IpedsRaceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IpedsRace])
  async ipedsRaces(
    @graphql.Args() args: IpedsRaceFindManyArgs
  ): Promise<IpedsRace[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IpedsRace, { nullable: true })
  async ipedsRace(
    @graphql.Args() args: IpedsRaceFindUniqueArgs
  ): Promise<IpedsRace | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IpedsRace)
  async createIpedsRace(
    @graphql.Args() args: CreateIpedsRaceArgs
  ): Promise<IpedsRace> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => IpedsRace)
  async updateIpedsRace(
    @graphql.Args() args: UpdateIpedsRaceArgs
  ): Promise<IpedsRace | null> {
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

  @graphql.Mutation(() => IpedsRace)
  async deleteIpedsRace(
    @graphql.Args() args: DeleteIpedsRaceArgs
  ): Promise<IpedsRace | null> {
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
