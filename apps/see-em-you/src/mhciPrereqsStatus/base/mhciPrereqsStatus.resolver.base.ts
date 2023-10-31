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
import { CreateMhciPrereqsStatusArgs } from "./CreateMhciPrereqsStatusArgs";
import { UpdateMhciPrereqsStatusArgs } from "./UpdateMhciPrereqsStatusArgs";
import { DeleteMhciPrereqsStatusArgs } from "./DeleteMhciPrereqsStatusArgs";
import { MhciPrereqsStatusCountArgs } from "./MhciPrereqsStatusCountArgs";
import { MhciPrereqsStatusFindManyArgs } from "./MhciPrereqsStatusFindManyArgs";
import { MhciPrereqsStatusFindUniqueArgs } from "./MhciPrereqsStatusFindUniqueArgs";
import { MhciPrereqsStatus } from "./MhciPrereqsStatus";
import { MhciPrereq } from "../../mhciPrereq/base/MhciPrereq";
import { MhciPrereqsStatusService } from "../mhciPrereqsStatus.service";
@graphql.Resolver(() => MhciPrereqsStatus)
export class MhciPrereqsStatusResolverBase {
  constructor(protected readonly service: MhciPrereqsStatusService) {}

  async _mhciPrereqsStatusesMeta(
    @graphql.Args() args: MhciPrereqsStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MhciPrereqsStatus])
  async mhciPrereqsStatuses(
    @graphql.Args() args: MhciPrereqsStatusFindManyArgs
  ): Promise<MhciPrereqsStatus[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MhciPrereqsStatus, { nullable: true })
  async mhciPrereqsStatus(
    @graphql.Args() args: MhciPrereqsStatusFindUniqueArgs
  ): Promise<MhciPrereqsStatus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MhciPrereqsStatus)
  async createMhciPrereqsStatus(
    @graphql.Args() args: CreateMhciPrereqsStatusArgs
  ): Promise<MhciPrereqsStatus> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        mhciPrereqs: {
          connect: args.data.mhciPrereqs,
        },
      },
    });
  }

  @graphql.Mutation(() => MhciPrereqsStatus)
  async updateMhciPrereqsStatus(
    @graphql.Args() args: UpdateMhciPrereqsStatusArgs
  ): Promise<MhciPrereqsStatus | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          mhciPrereqs: {
            connect: args.data.mhciPrereqs,
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

  @graphql.Mutation(() => MhciPrereqsStatus)
  async deleteMhciPrereqsStatus(
    @graphql.Args() args: DeleteMhciPrereqsStatusArgs
  ): Promise<MhciPrereqsStatus | null> {
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

  @graphql.ResolveField(() => MhciPrereq, {
    nullable: true,
    name: "mhciPrereqs",
  })
  async resolveFieldMhciPrereqs(
    @graphql.Parent() parent: MhciPrereqsStatus
  ): Promise<MhciPrereq | null> {
    const result = await this.service.getMhciPrereqs(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
