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
import { MhciPrereqsProgrammingSample } from "./MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingSampleCountArgs } from "./MhciPrereqsProgrammingSampleCountArgs";
import { MhciPrereqsProgrammingSampleFindManyArgs } from "./MhciPrereqsProgrammingSampleFindManyArgs";
import { MhciPrereqsProgrammingSampleFindUniqueArgs } from "./MhciPrereqsProgrammingSampleFindUniqueArgs";
import { CreateMhciPrereqsProgrammingSampleArgs } from "./CreateMhciPrereqsProgrammingSampleArgs";
import { UpdateMhciPrereqsProgrammingSampleArgs } from "./UpdateMhciPrereqsProgrammingSampleArgs";
import { DeleteMhciPrereqsProgrammingSampleArgs } from "./DeleteMhciPrereqsProgrammingSampleArgs";
import { LuUsersUsertype } from "../../luUsersUsertype/base/LuUsersUsertype";
import { MhciPrereqsProgrammingSampleService } from "../mhciPrereqsProgrammingSample.service";
@graphql.Resolver(() => MhciPrereqsProgrammingSample)
export class MhciPrereqsProgrammingSampleResolverBase {
  constructor(
    protected readonly service: MhciPrereqsProgrammingSampleService
  ) {}

  async _mhciPrereqsProgrammingSamplesMeta(
    @graphql.Args() args: MhciPrereqsProgrammingSampleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MhciPrereqsProgrammingSample])
  async mhciPrereqsProgrammingSamples(
    @graphql.Args() args: MhciPrereqsProgrammingSampleFindManyArgs
  ): Promise<MhciPrereqsProgrammingSample[]> {
    return this.service.mhciPrereqsProgrammingSamples(args);
  }

  @graphql.Query(() => MhciPrereqsProgrammingSample, { nullable: true })
  async mhciPrereqsProgrammingSample(
    @graphql.Args() args: MhciPrereqsProgrammingSampleFindUniqueArgs
  ): Promise<MhciPrereqsProgrammingSample | null> {
    const result = await this.service.mhciPrereqsProgrammingSample(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MhciPrereqsProgrammingSample)
  async createMhciPrereqsProgrammingSample(
    @graphql.Args() args: CreateMhciPrereqsProgrammingSampleArgs
  ): Promise<MhciPrereqsProgrammingSample> {
    return await this.service.createMhciPrereqsProgrammingSample({
      ...args,
      data: {
        ...args.data,

        luUsersUsertypes: {
          connect: args.data.luUsersUsertypes,
        },
      },
    });
  }

  @graphql.Mutation(() => MhciPrereqsProgrammingSample)
  async updateMhciPrereqsProgrammingSample(
    @graphql.Args() args: UpdateMhciPrereqsProgrammingSampleArgs
  ): Promise<MhciPrereqsProgrammingSample | null> {
    try {
      return await this.service.updateMhciPrereqsProgrammingSample({
        ...args,
        data: {
          ...args.data,

          luUsersUsertypes: {
            connect: args.data.luUsersUsertypes,
          },
        },
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

  @graphql.Mutation(() => MhciPrereqsProgrammingSample)
  async deleteMhciPrereqsProgrammingSample(
    @graphql.Args() args: DeleteMhciPrereqsProgrammingSampleArgs
  ): Promise<MhciPrereqsProgrammingSample | null> {
    try {
      return await this.service.deleteMhciPrereqsProgrammingSample(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => LuUsersUsertype, {
    nullable: true,
    name: "luUsersUsertypes",
  })
  async getLuUsersUsertypes(
    @graphql.Parent() parent: MhciPrereqsProgrammingSample
  ): Promise<LuUsersUsertype | null> {
    const result = await this.service.getLuUsersUsertypes(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
