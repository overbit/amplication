/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateApplicationArgs } from "./CreateApplicationArgs";
import { UpdateApplicationArgs } from "./UpdateApplicationArgs";
import { DeleteApplicationArgs } from "./DeleteApplicationArgs";
import { ApplicationCountArgs } from "./ApplicationCountArgs";
import { ApplicationFindManyArgs } from "./ApplicationFindManyArgs";
import { ApplicationFindUniqueArgs } from "./ApplicationFindUniqueArgs";
import { Application } from "./Application";
import { ApplicationAdminNoteFindManyArgs } from "../../applicationAdminNote/base/ApplicationAdminNoteFindManyArgs";
import { ApplicationAdminNote } from "../../applicationAdminNote/base/ApplicationAdminNote";
import { AttendanceFindManyArgs } from "../../attendance/base/AttendanceFindManyArgs";
import { Attendance } from "../../attendance/base/Attendance";
import { CashnetPaymentFindManyArgs } from "../../cashnetPayment/base/CashnetPaymentFindManyArgs";
import { CashnetPayment } from "../../cashnetPayment/base/CashnetPayment";
import { ExperienceFindManyArgs } from "../../experience/base/ExperienceFindManyArgs";
import { Experience } from "../../experience/base/Experience";
import { FellowshipFindManyArgs } from "../../fellowship/base/FellowshipFindManyArgs";
import { Fellowship } from "../../fellowship/base/Fellowship";
import { GmatscoreFindManyArgs } from "../../gmatscore/base/GmatscoreFindManyArgs";
import { Gmatscore } from "../../gmatscore/base/Gmatscore";
import { GresubjectscoreFindManyArgs } from "../../gresubjectscore/base/GresubjectscoreFindManyArgs";
import { Gresubjectscore } from "../../gresubjectscore/base/Gresubjectscore";
import { IeltsscoreFindManyArgs } from "../../ieltsscore/base/IeltsscoreFindManyArgs";
import { Ieltsscore } from "../../ieltsscore/base/Ieltsscore";
import { LuApplicationAdvisorFindManyArgs } from "../../luApplicationAdvisor/base/LuApplicationAdvisorFindManyArgs";
import { LuApplicationAdvisor } from "../../luApplicationAdvisor/base/LuApplicationAdvisor";
import { LuApplicationAppreqFindManyArgs } from "../../luApplicationAppreq/base/LuApplicationAppreqFindManyArgs";
import { LuApplicationAppreq } from "../../luApplicationAppreq/base/LuApplicationAppreq";
import { LuApplicationGroupFindManyArgs } from "../../luApplicationGroup/base/LuApplicationGroupFindManyArgs";
import { LuApplicationGroup } from "../../luApplicationGroup/base/LuApplicationGroup";
import { LuApplicationProgramFindManyArgs } from "../../luApplicationProgram/base/LuApplicationProgramFindManyArgs";
import { LuApplicationProgram } from "../../luApplicationProgram/base/LuApplicationProgram";
import { MhciPrereqFindManyArgs } from "../../mhciPrereq/base/MhciPrereqFindManyArgs";
import { MhciPrereq } from "../../mhciPrereq/base/MhciPrereq";
import { MhciPrereqsCourseFindManyArgs } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseFindManyArgs";
import { MhciPrereqsCourse } from "../../mhciPrereqsCourse/base/MhciPrereqsCourse";
import { MlAreaFindManyArgs } from "../../mlArea/base/MlAreaFindManyArgs";
import { MlArea } from "../../mlArea/base/MlArea";
import { MlSupportingCourseworkFindManyArgs } from "../../mlSupportingCoursework/base/MlSupportingCourseworkFindManyArgs";
import { MlSupportingCoursework } from "../../mlSupportingCoursework/base/MlSupportingCoursework";
import { MseAqaFindManyArgs } from "../../mseAqa/base/MseAqaFindManyArgs";
import { MseAqa } from "../../mseAqa/base/MseAqa";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PeriodApplicationFindManyArgs } from "../../periodApplication/base/PeriodApplicationFindManyArgs";
import { PeriodApplication } from "../../periodApplication/base/PeriodApplication";
import { PromotionHistoryFindManyArgs } from "../../promotionHistory/base/PromotionHistoryFindManyArgs";
import { PromotionHistory } from "../../promotionHistory/base/PromotionHistory";
import { PublicationFindManyArgs } from "../../publication/base/PublicationFindManyArgs";
import { Publication } from "../../publication/base/Publication";
import { RecommendFindManyArgs } from "../../recommend/base/RecommendFindManyArgs";
import { Recommend } from "../../recommend/base/Recommend";
import { RegistrationFeePaymentFindManyArgs } from "../../registrationFeePayment/base/RegistrationFeePaymentFindManyArgs";
import { RegistrationFeePayment } from "../../registrationFeePayment/base/RegistrationFeePayment";
import { RegistrationFeeStatusFindManyArgs } from "../../registrationFeeStatus/base/RegistrationFeeStatusFindManyArgs";
import { RegistrationFeeStatus } from "../../registrationFeeStatus/base/RegistrationFeeStatus";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { RissFundingFindManyArgs } from "../../rissFunding/base/RissFundingFindManyArgs";
import { RissFunding } from "../../rissFunding/base/RissFunding";
import { RissMcnairFindManyArgs } from "../../rissMcnair/base/RissMcnairFindManyArgs";
import { RissMcnair } from "../../rissMcnair/base/RissMcnair";
import { SpecialConsiderationFindManyArgs } from "../../specialConsideration/base/SpecialConsiderationFindManyArgs";
import { SpecialConsideration } from "../../specialConsideration/base/SpecialConsideration";
import { StudentDecisionFindManyArgs } from "../../studentDecision/base/StudentDecisionFindManyArgs";
import { StudentDecision } from "../../studentDecision/base/StudentDecision";
import { StudentDecisionHistoryFindManyArgs } from "../../studentDecisionHistory/base/StudentDecisionHistoryFindManyArgs";
import { StudentDecisionHistory } from "../../studentDecisionHistory/base/StudentDecisionHistory";
import { TagMemberFindManyArgs } from "../../tagMember/base/TagMemberFindManyArgs";
import { TagMember } from "../../tagMember/base/TagMember";
import { AcoPal } from "../../acoPal/base/AcoPal";
import { LuApplicationCohort } from "../../luApplicationCohort/base/LuApplicationCohort";
import { LuApplicationStartSemester } from "../../luApplicationStartSemester/base/LuApplicationStartSemester";
import { MseCodility } from "../../mseCodility/base/MseCodility";
import { ApplicationService } from "../application.service";
@graphql.Resolver(() => Application)
export class ApplicationResolverBase {
  constructor(protected readonly service: ApplicationService) {}

  async _applicationsMeta(
    @graphql.Args() args: ApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Application])
  async applications(
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Application, { nullable: true })
  async application(
    @graphql.Args() args: ApplicationFindUniqueArgs
  ): Promise<Application | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Application)
  async createApplication(
    @graphql.Args() args: CreateApplicationArgs
  ): Promise<Application> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        acoPal: args.data.acoPal
          ? {
              connect: args.data.acoPal,
            }
          : undefined,

        luApplicationCohort: args.data.luApplicationCohort
          ? {
              connect: args.data.luApplicationCohort,
            }
          : undefined,

        luApplicationStartSemester: args.data.luApplicationStartSemester
          ? {
              connect: args.data.luApplicationStartSemester,
            }
          : undefined,

        mseCodility: args.data.mseCodility
          ? {
              connect: args.data.mseCodility,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Application)
  async updateApplication(
    @graphql.Args() args: UpdateApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          acoPal: args.data.acoPal
            ? {
                connect: args.data.acoPal,
              }
            : undefined,

          luApplicationCohort: args.data.luApplicationCohort
            ? {
                connect: args.data.luApplicationCohort,
              }
            : undefined,

          luApplicationStartSemester: args.data.luApplicationStartSemester
            ? {
                connect: args.data.luApplicationStartSemester,
              }
            : undefined,

          mseCodility: args.data.mseCodility
            ? {
                connect: args.data.mseCodility,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Application)
  async deleteApplication(
    @graphql.Args() args: DeleteApplicationArgs
  ): Promise<Application | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ApplicationAdminNote], {
    name: "applicationAdminNote",
  })
  async resolveFieldApplicationAdminNote(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: ApplicationAdminNoteFindManyArgs
  ): Promise<ApplicationAdminNote[]> {
    const results = await this.service.findApplicationAdminNote(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Attendance], { name: "attendance" })
  async resolveFieldAttendance(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    const results = await this.service.findAttendance(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [CashnetPayment], { name: "cashnetPayment" })
  async resolveFieldCashnetPayment(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: CashnetPaymentFindManyArgs
  ): Promise<CashnetPayment[]> {
    const results = await this.service.findCashnetPayment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Experience], { name: "experience" })
  async resolveFieldExperience(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: ExperienceFindManyArgs
  ): Promise<Experience[]> {
    const results = await this.service.findExperience(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Fellowship], { name: "fellowships" })
  async resolveFieldFellowships(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: FellowshipFindManyArgs
  ): Promise<Fellowship[]> {
    const results = await this.service.findFellowships(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Gmatscore], { name: "gmatscore" })
  async resolveFieldGmatscore(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: GmatscoreFindManyArgs
  ): Promise<Gmatscore[]> {
    const results = await this.service.findGmatscore(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Gresubjectscore], { name: "gresubjectscore" })
  async resolveFieldGresubjectscore(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: GresubjectscoreFindManyArgs
  ): Promise<Gresubjectscore[]> {
    const results = await this.service.findGresubjectscore(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Ieltsscore], { name: "ieltsscore" })
  async resolveFieldIeltsscore(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: IeltsscoreFindManyArgs
  ): Promise<Ieltsscore[]> {
    const results = await this.service.findIeltsscore(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [LuApplicationAdvisor], {
    name: "luApplicationAdvisor",
  })
  async resolveFieldLuApplicationAdvisor(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: LuApplicationAdvisorFindManyArgs
  ): Promise<LuApplicationAdvisor[]> {
    const results = await this.service.findLuApplicationAdvisor(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [LuApplicationAppreq], {
    name: "luApplicationAppreqs",
  })
  async resolveFieldLuApplicationAppreqs(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: LuApplicationAppreqFindManyArgs
  ): Promise<LuApplicationAppreq[]> {
    const results = await this.service.findLuApplicationAppreqs(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [LuApplicationGroup], {
    name: "luApplicationGroups",
  })
  async resolveFieldLuApplicationGroups(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: LuApplicationGroupFindManyArgs
  ): Promise<LuApplicationGroup[]> {
    const results = await this.service.findLuApplicationGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [LuApplicationProgram], {
    name: "luApplicationPrograms",
  })
  async resolveFieldLuApplicationPrograms(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: LuApplicationProgramFindManyArgs
  ): Promise<LuApplicationProgram[]> {
    const results = await this.service.findLuApplicationPrograms(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MhciPrereq], { name: "mhciPrereqs" })
  async resolveFieldMhciPrereqs(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: MhciPrereqFindManyArgs
  ): Promise<MhciPrereq[]> {
    const results = await this.service.findMhciPrereqs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MhciPrereqsCourse], {
    name: "mhciPrereqsCourses",
  })
  async resolveFieldMhciPrereqsCourses(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: MhciPrereqsCourseFindManyArgs
  ): Promise<MhciPrereqsCourse[]> {
    const results = await this.service.findMhciPrereqsCourses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MlArea], { name: "mlArea" })
  async resolveFieldMlArea(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: MlAreaFindManyArgs
  ): Promise<MlArea[]> {
    const results = await this.service.findMlArea(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MlSupportingCoursework], {
    name: "mlSupportingCoursework",
  })
  async resolveFieldMlSupportingCoursework(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: MlSupportingCourseworkFindManyArgs
  ): Promise<MlSupportingCoursework[]> {
    const results = await this.service.findMlSupportingCoursework(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MseAqa], { name: "mseAqa" })
  async resolveFieldMseAqa(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: MseAqaFindManyArgs
  ): Promise<MseAqa[]> {
    const results = await this.service.findMseAqa(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Payment], { name: "payment" })
  async resolveFieldPayment(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    const results = await this.service.findPayment(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [PeriodApplication], {
    name: "periodApplication",
  })
  async resolveFieldPeriodApplication(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: PeriodApplicationFindManyArgs
  ): Promise<PeriodApplication[]> {
    const results = await this.service.findPeriodApplication(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [PromotionHistory], { name: "promotionHistory" })
  async resolveFieldPromotionHistory(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: PromotionHistoryFindManyArgs
  ): Promise<PromotionHistory[]> {
    const results = await this.service.findPromotionHistory(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Publication], { name: "publication" })
  async resolveFieldPublication(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: PublicationFindManyArgs
  ): Promise<Publication[]> {
    const results = await this.service.findPublication(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Recommend], { name: "recommend" })
  async resolveFieldRecommend(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: RecommendFindManyArgs
  ): Promise<Recommend[]> {
    const results = await this.service.findRecommend(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [RegistrationFeePayment], {
    name: "registrationFeePayment",
  })
  async resolveFieldRegistrationFeePayment(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: RegistrationFeePaymentFindManyArgs
  ): Promise<RegistrationFeePayment[]> {
    const results = await this.service.findRegistrationFeePayment(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [RegistrationFeeStatus], {
    name: "registrationFeeStatus",
  })
  async resolveFieldRegistrationFeeStatus(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: RegistrationFeeStatusFindManyArgs
  ): Promise<RegistrationFeeStatus[]> {
    const results = await this.service.findRegistrationFeeStatus(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Review], { name: "review" })
  async resolveFieldReview(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReview(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [RissFunding], { name: "rissFunding" })
  async resolveFieldRissFunding(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: RissFundingFindManyArgs
  ): Promise<RissFunding[]> {
    const results = await this.service.findRissFunding(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [RissMcnair], { name: "rissMcnair" })
  async resolveFieldRissMcnair(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: RissMcnairFindManyArgs
  ): Promise<RissMcnair[]> {
    const results = await this.service.findRissMcnair(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [SpecialConsideration], {
    name: "specialConsideration",
  })
  async resolveFieldSpecialConsideration(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: SpecialConsiderationFindManyArgs
  ): Promise<SpecialConsideration[]> {
    const results = await this.service.findSpecialConsideration(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [StudentDecision], { name: "studentDecision" })
  async resolveFieldStudentDecision(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: StudentDecisionFindManyArgs
  ): Promise<StudentDecision[]> {
    const results = await this.service.findStudentDecision(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [StudentDecisionHistory], {
    name: "studentDecisionHistory",
  })
  async resolveFieldStudentDecisionHistory(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: StudentDecisionHistoryFindManyArgs
  ): Promise<StudentDecisionHistory[]> {
    const results = await this.service.findStudentDecisionHistory(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [TagMember], { name: "tagMembers" })
  async resolveFieldTagMembers(
    @graphql.Parent() parent: Application,
    @graphql.Args() args: TagMemberFindManyArgs
  ): Promise<TagMember[]> {
    const results = await this.service.findTagMembers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => AcoPal, {
    nullable: true,
    name: "acoPal",
  })
  async resolveFieldAcoPal(
    @graphql.Parent() parent: Application
  ): Promise<AcoPal | null> {
    const result = await this.service.getAcoPal(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => LuApplicationCohort, {
    nullable: true,
    name: "luApplicationCohort",
  })
  async resolveFieldLuApplicationCohort(
    @graphql.Parent() parent: Application
  ): Promise<LuApplicationCohort | null> {
    const result = await this.service.getLuApplicationCohort(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => LuApplicationStartSemester, {
    nullable: true,
    name: "luApplicationStartSemester",
  })
  async resolveFieldLuApplicationStartSemester(
    @graphql.Parent() parent: Application
  ): Promise<LuApplicationStartSemester | null> {
    const result = await this.service.getLuApplicationStartSemester(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => MseCodility, {
    nullable: true,
    name: "mseCodility",
  })
  async resolveFieldMseCodility(
    @graphql.Parent() parent: Application
  ): Promise<MseCodility | null> {
    const result = await this.service.getMseCodility(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
