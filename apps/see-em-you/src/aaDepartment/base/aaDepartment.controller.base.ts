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
import { AaDepartmentService } from "../aaDepartment.service";
import { AaDepartmentCreateInput } from "./AaDepartmentCreateInput";
import { AaDepartmentWhereInput } from "./AaDepartmentWhereInput";
import { AaDepartmentWhereUniqueInput } from "./AaDepartmentWhereUniqueInput";
import { AaDepartmentFindManyArgs } from "./AaDepartmentFindManyArgs";
import { AaDepartmentUpdateInput } from "./AaDepartmentUpdateInput";
import { AaDepartment } from "./AaDepartment";

export class AaDepartmentControllerBase {
  constructor(protected readonly service: AaDepartmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AaDepartment })
  async create(
    @common.Body() data: AaDepartmentCreateInput
  ): Promise<AaDepartment> {
    return await this.service.create({
      data: {
        ...data,

        department: {
          connect: data.department,
        },

        period: data.period
          ? {
              connect: data.period,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AaDepartment] })
  @ApiNestedQuery(AaDepartmentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<AaDepartment[]> {
    const args = plainToClass(AaDepartmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AaDepartmentWhereUniqueInput
  ): Promise<AaDepartment | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AaDepartmentWhereUniqueInput,
    @common.Body() data: AaDepartmentUpdateInput
  ): Promise<AaDepartment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          department: {
            connect: data.department,
          },

          period: data.period
            ? {
                connect: data.period,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: AaDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AaDepartmentWhereUniqueInput
  ): Promise<AaDepartment | null> {
    try {
      return await this.service.delete({
        where: params,
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
