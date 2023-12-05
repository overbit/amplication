/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MhciPrereqService } from "../mhciPrereq.service";
import { MhciPrereqCreateInput } from "./MhciPrereqCreateInput";
import { MhciPrereq } from "./MhciPrereq";
import { MhciPrereqFindManyArgs } from "./MhciPrereqFindManyArgs";
import { MhciPrereqWhereUniqueInput } from "./MhciPrereqWhereUniqueInput";
import { MhciPrereqUpdateInput } from "./MhciPrereqUpdateInput";
import { MhciPrereqsConversationCommentFindManyArgs } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentFindManyArgs";
import { MhciPrereqsConversationComment } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationComment";
import { MhciPrereqsConversationCommentWhereUniqueInput } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentWhereUniqueInput";

export class MhciPrereqControllerBase {
  constructor(protected readonly service: MhciPrereqService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciPrereq })
  async createMhciPrereq(
    @common.Body() data: MhciPrereqCreateInput
  ): Promise<MhciPrereq> {
    return await this.service.createMhciPrereq({
      data: {
        ...data,

        application: {
          connect: data.application,
        },

        mhciPrereqsStatus: data.mhciPrereqsStatus
          ? {
              connect: data.mhciPrereqsStatus,
            }
          : undefined,
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,

        mhciPrereqsStatus: {
          select: {
            id: true,
          },
        },

        periodId: true,
        prereq_type: true,
        status2: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciPrereq] })
  @ApiNestedQuery(MhciPrereqFindManyArgs)
  async mhciPrereqs(@common.Req() request: Request): Promise<MhciPrereq[]> {
    const args = plainToClass(MhciPrereqFindManyArgs, request.query);
    return this.service.mhciPrereqs({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,

        mhciPrereqsStatus: {
          select: {
            id: true,
          },
        },

        periodId: true,
        prereq_type: true,
        status2: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mhciPrereq(
    @common.Param() params: MhciPrereqWhereUniqueInput
  ): Promise<MhciPrereq | null> {
    const result = await this.service.mhciPrereq({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,

        mhciPrereqsStatus: {
          select: {
            id: true,
          },
        },

        periodId: true,
        prereq_type: true,
        status2: true,
        student_assessment: true,
        studentLuUsersUsertypesId: true,
        timestamp: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMhciPrereq(
    @common.Param() params: MhciPrereqWhereUniqueInput,
    @common.Body() data: MhciPrereqUpdateInput
  ): Promise<MhciPrereq | null> {
    try {
      return await this.service.updateMhciPrereq({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },

          mhciPrereqsStatus: data.mhciPrereqsStatus
            ? {
                connect: data.mhciPrereqsStatus,
              }
            : undefined,
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          id: true,

          mhciPrereqsStatus: {
            select: {
              id: true,
            },
          },

          periodId: true,
          prereq_type: true,
          status2: true,
          student_assessment: true,
          studentLuUsersUsertypesId: true,
          timestamp: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MhciPrereq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMhciPrereq(
    @common.Param() params: MhciPrereqWhereUniqueInput
  ): Promise<MhciPrereq | null> {
    try {
      return await this.service.deleteMhciPrereq({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          id: true,

          mhciPrereqsStatus: {
            select: {
              id: true,
            },
          },

          periodId: true,
          prereq_type: true,
          status2: true,
          student_assessment: true,
          studentLuUsersUsertypesId: true,
          timestamp: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/mhciPrereqsConversationComments")
  @ApiNestedQuery(MhciPrereqsConversationCommentFindManyArgs)
  async findMhciPrereqsConversationComments(
    @common.Req() request: Request,
    @common.Param() params: MhciPrereqWhereUniqueInput
  ): Promise<MhciPrereqsConversationComment[]> {
    const query = plainToClass(
      MhciPrereqsConversationCommentFindManyArgs,
      request.query
    );
    const results = await this.service.findMhciPrereqsConversationComments(
      params.id,
      {
        ...query,
        select: {
          applicationId: true,
          comment: true,
          id: true,

          luUsersUsertypes: {
            select: {
              id: true,
            },
          },

          mhciPrereqs: {
            select: {
              id: true,
            },
          },

          periodId: true,
          programId: true,
          timestamp: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mhciPrereqsConversationComments")
  async connectMhciPrereqsConversationComments(
    @common.Param() params: MhciPrereqWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        connect: body,
      },
    };
    await this.service.updateMhciPrereq({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mhciPrereqsConversationComments")
  async updateMhciPrereqsConversationComments(
    @common.Param() params: MhciPrereqWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        set: body,
      },
    };
    await this.service.updateMhciPrereq({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mhciPrereqsConversationComments")
  async disconnectMhciPrereqsConversationComments(
    @common.Param() params: MhciPrereqWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        disconnect: body,
      },
    };
    await this.service.updateMhciPrereq({
      where: params,
      data,
      select: { id: true },
    });
  }
}
