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
import { LuUsersUsertypeService } from "../luUsersUsertype.service";
import { LuUsersUsertypeCreateInput } from "./LuUsersUsertypeCreateInput";
import { LuUsersUsertype } from "./LuUsersUsertype";
import { LuUsersUsertypeFindManyArgs } from "./LuUsersUsertypeFindManyArgs";
import { LuUsersUsertypeWhereUniqueInput } from "./LuUsersUsertypeWhereUniqueInput";
import { LuUsersUsertypeUpdateInput } from "./LuUsersUsertypeUpdateInput";
import { MhciPrereqsConversationCommentFindManyArgs } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentFindManyArgs";
import { MhciPrereqsConversationComment } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationComment";
import { MhciPrereqsConversationCommentWhereUniqueInput } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentWhereUniqueInput";
import { MhciPrereqsCourseFindManyArgs } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseFindManyArgs";
import { MhciPrereqsCourse } from "../../mhciPrereqsCourse/base/MhciPrereqsCourse";
import { MhciPrereqsCourseWhereUniqueInput } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseWhereUniqueInput";
import { MhciPrereqsDesignPortfolioFindManyArgs } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolioFindManyArgs";
import { MhciPrereqsDesignPortfolio } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolio";
import { MhciPrereqsDesignPortfolioWhereUniqueInput } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolioWhereUniqueInput";
import { MhciPrereqsProgrammingTestFindManyArgs } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTestFindManyArgs";
import { MhciPrereqsProgrammingTest } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTest";
import { MhciPrereqsProgrammingTestWhereUniqueInput } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTestWhereUniqueInput";

export class LuUsersUsertypeControllerBase {
  constructor(protected readonly service: LuUsersUsertypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuUsersUsertype })
  async createLuUsersUsertype(
    @common.Body() data: LuUsersUsertypeCreateInput
  ): Promise<LuUsersUsertype> {
    return await this.service.createLuUsersUsertype({
      data: {
        ...data,

        mhciPrereqsProgrammingSamples: data.mhciPrereqsProgrammingSamples
          ? {
              connect: data.mhciPrereqsProgrammingSamples,
            }
          : undefined,

        users: {
          connect: data.users,
        },
      },
      select: {
        domain: true,
        id: true,

        mhciPrereqsProgrammingSamples: {
          select: {
            id: true,
          },
        },

        users: {
          select: {
            id: true,
          },
        },

        usertypeId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuUsersUsertype] })
  @ApiNestedQuery(LuUsersUsertypeFindManyArgs)
  async luUsersUsertypes(
    @common.Req() request: Request
  ): Promise<LuUsersUsertype[]> {
    const args = plainToClass(LuUsersUsertypeFindManyArgs, request.query);
    return this.service.luUsersUsertypes({
      ...args,
      select: {
        domain: true,
        id: true,

        mhciPrereqsProgrammingSamples: {
          select: {
            id: true,
          },
        },

        users: {
          select: {
            id: true,
          },
        },

        usertypeId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuUsersUsertype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luUsersUsertype(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
  ): Promise<LuUsersUsertype | null> {
    const result = await this.service.luUsersUsertype({
      where: params,
      select: {
        domain: true,
        id: true,

        mhciPrereqsProgrammingSamples: {
          select: {
            id: true,
          },
        },

        users: {
          select: {
            id: true,
          },
        },

        usertypeId: true,
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
  @swagger.ApiOkResponse({ type: LuUsersUsertype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuUsersUsertype(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() data: LuUsersUsertypeUpdateInput
  ): Promise<LuUsersUsertype | null> {
    try {
      return await this.service.updateLuUsersUsertype({
        where: params,
        data: {
          ...data,

          mhciPrereqsProgrammingSamples: data.mhciPrereqsProgrammingSamples
            ? {
                connect: data.mhciPrereqsProgrammingSamples,
              }
            : undefined,

          users: {
            connect: data.users,
          },
        },
        select: {
          domain: true,
          id: true,

          mhciPrereqsProgrammingSamples: {
            select: {
              id: true,
            },
          },

          users: {
            select: {
              id: true,
            },
          },

          usertypeId: true,
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
  @swagger.ApiOkResponse({ type: LuUsersUsertype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuUsersUsertype(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
  ): Promise<LuUsersUsertype | null> {
    try {
      return await this.service.deleteLuUsersUsertype({
        where: params,
        select: {
          domain: true,
          id: true,

          mhciPrereqsProgrammingSamples: {
            select: {
              id: true,
            },
          },

          users: {
            select: {
              id: true,
            },
          },

          usertypeId: true,
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
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
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
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        connect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mhciPrereqsConversationComments")
  async updateMhciPrereqsConversationComments(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        set: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mhciPrereqsConversationComments")
  async disconnectMhciPrereqsConversationComments(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsConversationCommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsConversationComments: {
        disconnect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mhciPrereqsCourses")
  @ApiNestedQuery(MhciPrereqsCourseFindManyArgs)
  async findMhciPrereqsCourses(
    @common.Req() request: Request,
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
  ): Promise<MhciPrereqsCourse[]> {
    const query = plainToClass(MhciPrereqsCourseFindManyArgs, request.query);
    const results = await this.service.findMhciPrereqsCourses(params.id, {
      ...query,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        course_type: true,
        id: true,

        luUsersUsertypes: {
          select: {
            id: true,
          },
        },

        periodId: true,
        programId: true,
        studentCourseGrade: true,
        studentCourseInstitution: true,
        studentCourseName: true,
        studentCourseTime: true,
        submittedToReviewer: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/mhciPrereqsCourses")
  async connectMhciPrereqsCourses(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsCourses: {
        connect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mhciPrereqsCourses")
  async updateMhciPrereqsCourses(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsCourses: {
        set: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mhciPrereqsCourses")
  async disconnectMhciPrereqsCourses(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsCourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsCourses: {
        disconnect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mhciPrereqsDesignPortfolios")
  @ApiNestedQuery(MhciPrereqsDesignPortfolioFindManyArgs)
  async findMhciPrereqsDesignPortfolios(
    @common.Req() request: Request,
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
  ): Promise<MhciPrereqsDesignPortfolio[]> {
    const query = plainToClass(
      MhciPrereqsDesignPortfolioFindManyArgs,
      request.query
    );
    const results = await this.service.findMhciPrereqsDesignPortfolios(
      params.id,
      {
        ...query,
        select: {
          applicationId: true,
          description: true,
          id: true,

          luUsersUsertypes: {
            select: {
              id: true,
            },
          },

          periodId: true,
          programId: true,
          url: true,
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

  @common.Post("/:id/mhciPrereqsDesignPortfolios")
  async connectMhciPrereqsDesignPortfolios(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsDesignPortfolioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsDesignPortfolios: {
        connect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mhciPrereqsDesignPortfolios")
  async updateMhciPrereqsDesignPortfolios(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsDesignPortfolioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsDesignPortfolios: {
        set: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mhciPrereqsDesignPortfolios")
  async disconnectMhciPrereqsDesignPortfolios(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsDesignPortfolioWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsDesignPortfolios: {
        disconnect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mhciPrereqsProgrammingTests")
  @ApiNestedQuery(MhciPrereqsProgrammingTestFindManyArgs)
  async findMhciPrereqsProgrammingTests(
    @common.Req() request: Request,
    @common.Param() params: LuUsersUsertypeWhereUniqueInput
  ): Promise<MhciPrereqsProgrammingTest[]> {
    const query = plainToClass(
      MhciPrereqsProgrammingTestFindManyArgs,
      request.query
    );
    const results = await this.service.findMhciPrereqsProgrammingTests(
      params.id,
      {
        ...query,
        select: {
          applicationId: true,
          downloadTimestamp: true,
          id: true,

          luUsersUsertypes: {
            select: {
              id: true,
            },
          },

          periodId: true,
          uploadDatafileinfoId: true,
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

  @common.Post("/:id/mhciPrereqsProgrammingTests")
  async connectMhciPrereqsProgrammingTests(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsProgrammingTestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsProgrammingTests: {
        connect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mhciPrereqsProgrammingTests")
  async updateMhciPrereqsProgrammingTests(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsProgrammingTestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsProgrammingTests: {
        set: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mhciPrereqsProgrammingTests")
  async disconnectMhciPrereqsProgrammingTests(
    @common.Param() params: LuUsersUsertypeWhereUniqueInput,
    @common.Body() body: MhciPrereqsProgrammingTestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mhciPrereqsProgrammingTests: {
        disconnect: body,
      },
    };
    await this.service.updateLuUsersUsertype({
      where: params,
      data,
      select: { id: true },
    });
  }
}
