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
import { StudentDecisionService } from "../studentDecision.service";
import { StudentDecisionCreateInput } from "./StudentDecisionCreateInput";
import { StudentDecision } from "./StudentDecision";
import { StudentDecisionFindManyArgs } from "./StudentDecisionFindManyArgs";
import { StudentDecisionWhereUniqueInput } from "./StudentDecisionWhereUniqueInput";
import { StudentDecisionUpdateInput } from "./StudentDecisionUpdateInput";

export class StudentDecisionControllerBase {
  constructor(protected readonly service: StudentDecisionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentDecision })
  async createStudentDecision(
    @common.Body() data: StudentDecisionCreateInput
  ): Promise<StudentDecision> {
    return await this.service.createStudentDecision({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        programId: true,
        decision: true,
        acceptReasons: true,
        otherChoice: true,
        otherChoiceLocation: true,
        decisionReasons: true,
        visit: true,
        visitComments: true,
        otherSchoolsApplied: true,
        otherSchoolsAccepted: true,
        submitted: true,
        submittedDate: true,
        visitHelpful: true,
        maritalStatus: true,
        maritalOther: true,
        affiliatedCmu: true,
        progLength: true,
        attendAcc: true,
        legalName: true,
        prefName: true,
        prefEmail: true,
        dob: true,
        gender: true,
        genderOther: true,
        telMobile: true,
        streetP1: true,
        streetP2: true,
        streetP3: true,
        streetP4: true,
        cityP: true,
        stateP: true,
        postalP: true,
        countryP: true,
        citCountry: true,
        hispanic: true,
        natAm: true,
        black: true,
        asian: true,
        hpi: true,
        cau: true,
        doneDiff: true,
        admin: true,
        optComm: true,
        errors: true,
        deferralReasons: true,
        deferralSemester: true,
        deferralYear: true,
        pronoun: true,
        pronounOther: true,
        affiliatedCmutxt: true,

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
  @swagger.ApiOkResponse({ type: [StudentDecision] })
  @ApiNestedQuery(StudentDecisionFindManyArgs)
  async studentDecisions(
    @common.Req() request: Request
  ): Promise<StudentDecision[]> {
    const args = plainToClass(StudentDecisionFindManyArgs, request.query);
    return this.service.studentDecisions({
      ...args,
      select: {
        programId: true,
        decision: true,
        acceptReasons: true,
        otherChoice: true,
        otherChoiceLocation: true,
        decisionReasons: true,
        visit: true,
        visitComments: true,
        otherSchoolsApplied: true,
        otherSchoolsAccepted: true,
        submitted: true,
        submittedDate: true,
        visitHelpful: true,
        maritalStatus: true,
        maritalOther: true,
        affiliatedCmu: true,
        progLength: true,
        attendAcc: true,
        legalName: true,
        prefName: true,
        prefEmail: true,
        dob: true,
        gender: true,
        genderOther: true,
        telMobile: true,
        streetP1: true,
        streetP2: true,
        streetP3: true,
        streetP4: true,
        cityP: true,
        stateP: true,
        postalP: true,
        countryP: true,
        citCountry: true,
        hispanic: true,
        natAm: true,
        black: true,
        asian: true,
        hpi: true,
        cau: true,
        doneDiff: true,
        admin: true,
        optComm: true,
        errors: true,
        deferralReasons: true,
        deferralSemester: true,
        deferralYear: true,
        pronoun: true,
        pronounOther: true,
        affiliatedCmutxt: true,

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
  @swagger.ApiOkResponse({ type: StudentDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentDecision(
    @common.Param() params: StudentDecisionWhereUniqueInput
  ): Promise<StudentDecision | null> {
    const result = await this.service.studentDecision({
      where: params,
      select: {
        programId: true,
        decision: true,
        acceptReasons: true,
        otherChoice: true,
        otherChoiceLocation: true,
        decisionReasons: true,
        visit: true,
        visitComments: true,
        otherSchoolsApplied: true,
        otherSchoolsAccepted: true,
        submitted: true,
        submittedDate: true,
        visitHelpful: true,
        maritalStatus: true,
        maritalOther: true,
        affiliatedCmu: true,
        progLength: true,
        attendAcc: true,
        legalName: true,
        prefName: true,
        prefEmail: true,
        dob: true,
        gender: true,
        genderOther: true,
        telMobile: true,
        streetP1: true,
        streetP2: true,
        streetP3: true,
        streetP4: true,
        cityP: true,
        stateP: true,
        postalP: true,
        countryP: true,
        citCountry: true,
        hispanic: true,
        natAm: true,
        black: true,
        asian: true,
        hpi: true,
        cau: true,
        doneDiff: true,
        admin: true,
        optComm: true,
        errors: true,
        deferralReasons: true,
        deferralSemester: true,
        deferralYear: true,
        pronoun: true,
        pronounOther: true,
        affiliatedCmutxt: true,

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
  @swagger.ApiOkResponse({ type: StudentDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentDecision(
    @common.Param() params: StudentDecisionWhereUniqueInput,
    @common.Body() data: StudentDecisionUpdateInput
  ): Promise<StudentDecision | null> {
    try {
      return await this.service.updateStudentDecision({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          programId: true,
          decision: true,
          acceptReasons: true,
          otherChoice: true,
          otherChoiceLocation: true,
          decisionReasons: true,
          visit: true,
          visitComments: true,
          otherSchoolsApplied: true,
          otherSchoolsAccepted: true,
          submitted: true,
          submittedDate: true,
          visitHelpful: true,
          maritalStatus: true,
          maritalOther: true,
          affiliatedCmu: true,
          progLength: true,
          attendAcc: true,
          legalName: true,
          prefName: true,
          prefEmail: true,
          dob: true,
          gender: true,
          genderOther: true,
          telMobile: true,
          streetP1: true,
          streetP2: true,
          streetP3: true,
          streetP4: true,
          cityP: true,
          stateP: true,
          postalP: true,
          countryP: true,
          citCountry: true,
          hispanic: true,
          natAm: true,
          black: true,
          asian: true,
          hpi: true,
          cau: true,
          doneDiff: true,
          admin: true,
          optComm: true,
          errors: true,
          deferralReasons: true,
          deferralSemester: true,
          deferralYear: true,
          pronoun: true,
          pronounOther: true,
          affiliatedCmutxt: true,

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
  @swagger.ApiOkResponse({ type: StudentDecision })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentDecision(
    @common.Param() params: StudentDecisionWhereUniqueInput
  ): Promise<StudentDecision | null> {
    try {
      return await this.service.deleteStudentDecision({
        where: params,
        select: {
          programId: true,
          decision: true,
          acceptReasons: true,
          otherChoice: true,
          otherChoiceLocation: true,
          decisionReasons: true,
          visit: true,
          visitComments: true,
          otherSchoolsApplied: true,
          otherSchoolsAccepted: true,
          submitted: true,
          submittedDate: true,
          visitHelpful: true,
          maritalStatus: true,
          maritalOther: true,
          affiliatedCmu: true,
          progLength: true,
          attendAcc: true,
          legalName: true,
          prefName: true,
          prefEmail: true,
          dob: true,
          gender: true,
          genderOther: true,
          telMobile: true,
          streetP1: true,
          streetP2: true,
          streetP3: true,
          streetP4: true,
          cityP: true,
          stateP: true,
          postalP: true,
          countryP: true,
          citCountry: true,
          hispanic: true,
          natAm: true,
          black: true,
          asian: true,
          hpi: true,
          cau: true,
          doneDiff: true,
          admin: true,
          optComm: true,
          errors: true,
          deferralReasons: true,
          deferralSemester: true,
          deferralYear: true,
          pronoun: true,
          pronounOther: true,
          affiliatedCmutxt: true,

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
