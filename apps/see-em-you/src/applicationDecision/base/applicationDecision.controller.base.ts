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
import { ApplicationDecisionService } from "../applicationDecision.service";
import { ApplicationDecisionCreateInput } from "./ApplicationDecisionCreateInput";
import { ApplicationDecision } from "./ApplicationDecision";
import { ApplicationDecisionFindManyArgs } from "./ApplicationDecisionFindManyArgs";
import { ApplicationDecisionWhereUniqueInput } from "./ApplicationDecisionWhereUniqueInput";
import { ApplicationDecisionUpdateInput } from "./ApplicationDecisionUpdateInput";

export class ApplicationDecisionControllerBase {
  constructor(protected readonly service: ApplicationDecisionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicationDecision })
  async createApplicationDecision(
    @common.Body() data: ApplicationDecisionCreateInput
  ): Promise<ApplicationDecision> {
    return await this.service.createApplicationDecision({
      data: data,
      select: {
        applicationId: true,
        programId: true,
        periodId: true,
        admissionProgramId: true,
        admissionStatus: true,
        comments: true,
        attendOtherUniversity: true,
        otherChoiceLocation: true,
        visitCampus: true,
        visitHelpful: true,
        visitComments: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicationDecision] })
  @ApiNestedQuery(ApplicationDecisionFindManyArgs)
  async applicationDecisions(
    @common.Req() request: Request
  ): Promise<ApplicationDecision[]> {
    const args = plainToClass(ApplicationDecisionFindManyArgs, request.query);
    return this.service.applicationDecisions({
      ...args,
      select: {
        applicationId: true,
        programId: true,
        periodId: true,
        admissionProgramId: true,
        admissionStatus: true,
        comments: true,
        attendOtherUniversity: true,
        otherChoiceLocation: true,
        visitCampus: true,
        visitHelpful: true,
        visitComments: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicationDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async applicationDecision(
    @common.Param() params: ApplicationDecisionWhereUniqueInput
  ): Promise<ApplicationDecision | null> {
    const result = await this.service.applicationDecision({
      where: params,
      select: {
        applicationId: true,
        programId: true,
        periodId: true,
        admissionProgramId: true,
        admissionStatus: true,
        comments: true,
        attendOtherUniversity: true,
        otherChoiceLocation: true,
        visitCampus: true,
        visitHelpful: true,
        visitComments: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: ApplicationDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApplicationDecision(
    @common.Param() params: ApplicationDecisionWhereUniqueInput,
    @common.Body() data: ApplicationDecisionUpdateInput
  ): Promise<ApplicationDecision | null> {
    try {
      return await this.service.updateApplicationDecision({
        where: params,
        data: data,
        select: {
          applicationId: true,
          programId: true,
          periodId: true,
          admissionProgramId: true,
          admissionStatus: true,
          comments: true,
          attendOtherUniversity: true,
          otherChoiceLocation: true,
          visitCampus: true,
          visitHelpful: true,
          visitComments: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: ApplicationDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApplicationDecision(
    @common.Param() params: ApplicationDecisionWhereUniqueInput
  ): Promise<ApplicationDecision | null> {
    try {
      return await this.service.deleteApplicationDecision({
        where: params,
        select: {
          applicationId: true,
          programId: true,
          periodId: true,
          admissionProgramId: true,
          admissionStatus: true,
          comments: true,
          attendOtherUniversity: true,
          otherChoiceLocation: true,
          visitCampus: true,
          visitHelpful: true,
          visitComments: true,
          id: true,
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
