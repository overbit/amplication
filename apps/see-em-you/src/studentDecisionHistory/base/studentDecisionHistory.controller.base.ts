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
import { StudentDecisionHistoryService } from "../studentDecisionHistory.service";
import { StudentDecisionHistoryCreateInput } from "./StudentDecisionHistoryCreateInput";
import { StudentDecisionHistory } from "./StudentDecisionHistory";
import { StudentDecisionHistoryFindManyArgs } from "./StudentDecisionHistoryFindManyArgs";
import { StudentDecisionHistoryWhereUniqueInput } from "./StudentDecisionHistoryWhereUniqueInput";
import { StudentDecisionHistoryUpdateInput } from "./StudentDecisionHistoryUpdateInput";

export class StudentDecisionHistoryControllerBase {
  constructor(protected readonly service: StudentDecisionHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentDecisionHistory })
  async createStudentDecisionHistory(
    @common.Body() data: StudentDecisionHistoryCreateInput
  ): Promise<StudentDecisionHistory> {
    return await this.service.createStudentDecisionHistory({
      data: {
        ...data,

        application: data.application
          ? {
              connect: data.application,
            }
          : undefined,
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        decision: true,
        deferralSemester: true,
        deferralYear: true,
        id: true,
        insertDate: true,
        programId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentDecisionHistory] })
  @ApiNestedQuery(StudentDecisionHistoryFindManyArgs)
  async studentDecisionHistories(
    @common.Req() request: Request
  ): Promise<StudentDecisionHistory[]> {
    const args = plainToClass(
      StudentDecisionHistoryFindManyArgs,
      request.query
    );
    return this.service.studentDecisionHistories({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        decision: true,
        deferralSemester: true,
        deferralYear: true,
        id: true,
        insertDate: true,
        programId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentDecisionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentDecisionHistory(
    @common.Param() params: StudentDecisionHistoryWhereUniqueInput
  ): Promise<StudentDecisionHistory | null> {
    const result = await this.service.studentDecisionHistory({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        decision: true,
        deferralSemester: true,
        deferralYear: true,
        id: true,
        insertDate: true,
        programId: true,
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
  @swagger.ApiOkResponse({ type: StudentDecisionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentDecisionHistory(
    @common.Param() params: StudentDecisionHistoryWhereUniqueInput,
    @common.Body() data: StudentDecisionHistoryUpdateInput
  ): Promise<StudentDecisionHistory | null> {
    try {
      return await this.service.updateStudentDecisionHistory({
        where: params,
        data: {
          ...data,

          application: data.application
            ? {
                connect: data.application,
              }
            : undefined,
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          decision: true,
          deferralSemester: true,
          deferralYear: true,
          id: true,
          insertDate: true,
          programId: true,
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
  @swagger.ApiOkResponse({ type: StudentDecisionHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentDecisionHistory(
    @common.Param() params: StudentDecisionHistoryWhereUniqueInput
  ): Promise<StudentDecisionHistory | null> {
    try {
      return await this.service.deleteStudentDecisionHistory({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          decision: true,
          deferralSemester: true,
          deferralYear: true,
          id: true,
          insertDate: true,
          programId: true,
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
}
