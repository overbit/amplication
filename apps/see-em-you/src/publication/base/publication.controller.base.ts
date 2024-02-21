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
import { PublicationService } from "../publication.service";
import { PublicationCreateInput } from "./PublicationCreateInput";
import { Publication } from "./Publication";
import { PublicationFindManyArgs } from "./PublicationFindManyArgs";
import { PublicationWhereUniqueInput } from "./PublicationWhereUniqueInput";
import { PublicationUpdateInput } from "./PublicationUpdateInput";

export class PublicationControllerBase {
  constructor(protected readonly service: PublicationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Publication })
  async createPublication(
    @common.Body() data: PublicationCreateInput
  ): Promise<Publication> {
    return await this.service.createPublication({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        title: true,
        author: true,
        forum: true,
        citation: true,
        url: true,
        status: true,
        typeField: true,
        typeOther: true,
        datafileId: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Publication] })
  @ApiNestedQuery(PublicationFindManyArgs)
  async publications(@common.Req() request: Request): Promise<Publication[]> {
    const args = plainToClass(PublicationFindManyArgs, request.query);
    return this.service.publications({
      ...args,
      select: {
        title: true,
        author: true,
        forum: true,
        citation: true,
        url: true,
        status: true,
        typeField: true,
        typeOther: true,
        datafileId: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Publication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async publication(
    @common.Param() params: PublicationWhereUniqueInput
  ): Promise<Publication | null> {
    const result = await this.service.publication({
      where: params,
      select: {
        title: true,
        author: true,
        forum: true,
        citation: true,
        url: true,
        status: true,
        typeField: true,
        typeOther: true,
        datafileId: true,

        application: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Publication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePublication(
    @common.Param() params: PublicationWhereUniqueInput,
    @common.Body() data: PublicationUpdateInput
  ): Promise<Publication | null> {
    try {
      return await this.service.updatePublication({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          title: true,
          author: true,
          forum: true,
          citation: true,
          url: true,
          status: true,
          typeField: true,
          typeOther: true,
          datafileId: true,

          application: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Publication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePublication(
    @common.Param() params: PublicationWhereUniqueInput
  ): Promise<Publication | null> {
    try {
      return await this.service.deletePublication({
        where: params,
        select: {
          title: true,
          author: true,
          forum: true,
          citation: true,
          url: true,
          status: true,
          typeField: true,
          typeOther: true,
          datafileId: true,

          application: {
            select: {
              id: true,
            },
          },

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
