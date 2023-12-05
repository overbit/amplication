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
import { PeriodService } from "../period.service";
import { PeriodCreateInput } from "./PeriodCreateInput";
import { Period } from "./Period";
import { PeriodFindManyArgs } from "./PeriodFindManyArgs";
import { PeriodWhereUniqueInput } from "./PeriodWhereUniqueInput";
import { PeriodUpdateInput } from "./PeriodUpdateInput";
import { AaDepartmentFindManyArgs } from "../../aaDepartment/base/AaDepartmentFindManyArgs";
import { AaDepartment } from "../../aaDepartment/base/AaDepartment";
import { AaDepartmentWhereUniqueInput } from "../../aaDepartment/base/AaDepartmentWhereUniqueInput";
import { CohortFindManyArgs } from "../../cohort/base/CohortFindManyArgs";
import { Cohort } from "../../cohort/base/Cohort";
import { CohortWhereUniqueInput } from "../../cohort/base/CohortWhereUniqueInput";
import { PeriodApplicationFindManyArgs } from "../../periodApplication/base/PeriodApplicationFindManyArgs";
import { PeriodApplication } from "../../periodApplication/base/PeriodApplication";
import { PeriodApplicationWhereUniqueInput } from "../../periodApplication/base/PeriodApplicationWhereUniqueInput";

export class PeriodControllerBase {
  constructor(protected readonly service: PeriodService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Period })
  async createPeriod(@common.Body() data: PeriodCreateInput): Promise<Period> {
    return await this.service.createPeriod({
      data: data,
      select: {
        description: true,
        endDate: true,
        id: true,
        parentPeriodId: true,
        periodTypeId: true,
        startDate: true,
        unitId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Period] })
  @ApiNestedQuery(PeriodFindManyArgs)
  async periods(@common.Req() request: Request): Promise<Period[]> {
    const args = plainToClass(PeriodFindManyArgs, request.query);
    return this.service.periods({
      ...args,
      select: {
        description: true,
        endDate: true,
        id: true,
        parentPeriodId: true,
        periodTypeId: true,
        startDate: true,
        unitId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Period })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async period(
    @common.Param() params: PeriodWhereUniqueInput
  ): Promise<Period | null> {
    const result = await this.service.period({
      where: params,
      select: {
        description: true,
        endDate: true,
        id: true,
        parentPeriodId: true,
        periodTypeId: true,
        startDate: true,
        unitId: true,
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
  @swagger.ApiOkResponse({ type: Period })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePeriod(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() data: PeriodUpdateInput
  ): Promise<Period | null> {
    try {
      return await this.service.updatePeriod({
        where: params,
        data: data,
        select: {
          description: true,
          endDate: true,
          id: true,
          parentPeriodId: true,
          periodTypeId: true,
          startDate: true,
          unitId: true,
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
  @swagger.ApiOkResponse({ type: Period })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePeriod(
    @common.Param() params: PeriodWhereUniqueInput
  ): Promise<Period | null> {
    try {
      return await this.service.deletePeriod({
        where: params,
        select: {
          description: true,
          endDate: true,
          id: true,
          parentPeriodId: true,
          periodTypeId: true,
          startDate: true,
          unitId: true,
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

  @common.Get("/:id/aaDepartment")
  @ApiNestedQuery(AaDepartmentFindManyArgs)
  async findAaDepartment(
    @common.Req() request: Request,
    @common.Param() params: PeriodWhereUniqueInput
  ): Promise<AaDepartment[]> {
    const query = plainToClass(AaDepartmentFindManyArgs, request.query);
    const results = await this.service.findAaDepartment(params.id, {
      ...query,
      select: {
        department: {
          select: {
            id: true,
          },
        },

        id: true,

        period: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/aaDepartment")
  async connectAaDepartment(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: AaDepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aaDepartment: {
        connect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/aaDepartment")
  async updateAaDepartment(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: AaDepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aaDepartment: {
        set: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/aaDepartment")
  async disconnectAaDepartment(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: AaDepartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aaDepartment: {
        disconnect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/cohort")
  @ApiNestedQuery(CohortFindManyArgs)
  async findCohort(
    @common.Req() request: Request,
    @common.Param() params: PeriodWhereUniqueInput
  ): Promise<Cohort[]> {
    const query = plainToClass(CohortFindManyArgs, request.query);
    const results = await this.service.findCohort(params.id, {
      ...query,
      select: {
        closed: true,
        cohortId: true,
        id: true,

        period: {
          select: {
            id: true,
          },
        },

        startDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cohort")
  async connectCohort(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: CohortWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cohort: {
        connect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cohort")
  async updateCohort(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: CohortWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cohort: {
        set: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cohort")
  async disconnectCohort(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: CohortWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cohort: {
        disconnect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/periodApplication")
  @ApiNestedQuery(PeriodApplicationFindManyArgs)
  async findPeriodApplication(
    @common.Req() request: Request,
    @common.Param() params: PeriodWhereUniqueInput
  ): Promise<PeriodApplication[]> {
    const query = plainToClass(PeriodApplicationFindManyArgs, request.query);
    const results = await this.service.findPeriodApplication(params.id, {
      ...query,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,

        period: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/periodApplication")
  async connectPeriodApplication(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: PeriodApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      periodApplication: {
        connect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/periodApplication")
  async updatePeriodApplication(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: PeriodApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      periodApplication: {
        set: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/periodApplication")
  async disconnectPeriodApplication(
    @common.Param() params: PeriodWhereUniqueInput,
    @common.Body() body: PeriodApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      periodApplication: {
        disconnect: body,
      },
    };
    await this.service.updatePeriod({
      where: params,
      data,
      select: { id: true },
    });
  }
}
