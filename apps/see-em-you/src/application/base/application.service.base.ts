/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Application,
  ApplicationAdminNote,
  Attendance,
  CashnetPayment,
  Experience,
  Fellowship,
  Gmatscore,
  Gresubjectscore,
  Ieltsscore,
  LuApplicationAdvisor,
  LuApplicationAppreq,
  LuApplicationGroup,
  LuApplicationProgram,
  MhciPrereq,
  MhciPrereqsCourse,
  MlArea,
  MlSupportingCoursework,
  MseAqa,
  Payment,
  PeriodApplication,
  PromotionHistory,
  Publication,
  Recommend,
  RegistrationFeePayment,
  RegistrationFeeStatus,
  Review,
  RissFunding,
  RissMcnair,
  SpecialConsideration,
  StudentDecision,
  StudentDecisionHistory,
  TagMember,
  AcoPal,
  LuApplicationCohort,
  LuApplicationStartSemester,
  MseCodility,
} from "@prisma/client";

export class ApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApplicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationCountArgs>
  ): Promise<number> {
    return this.prisma.application.count(args);
  }

  async findMany<T extends Prisma.ApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindManyArgs>
  ): Promise<Application[]> {
    return this.prisma.application.findMany(args);
  }
  async findOne<T extends Prisma.ApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindUniqueArgs>
  ): Promise<Application | null> {
    return this.prisma.application.findUnique(args);
  }
  async create<T extends Prisma.ApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationCreateArgs>
  ): Promise<Application> {
    return this.prisma.application.create<T>(args);
  }
  async update<T extends Prisma.ApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationUpdateArgs>
  ): Promise<Application> {
    return this.prisma.application.update<T>(args);
  }
  async delete<T extends Prisma.ApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationDeleteArgs>
  ): Promise<Application> {
    return this.prisma.application.delete(args);
  }

  async findApplicationAdminNote(
    parentId: number,
    args: Prisma.ApplicationAdminNoteFindManyArgs
  ): Promise<ApplicationAdminNote[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applicationAdminNote(args);
  }

  async findAttendance(
    parentId: number,
    args: Prisma.AttendanceFindManyArgs
  ): Promise<Attendance[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attendance(args);
  }

  async findCashnetPayment(
    parentId: number,
    args: Prisma.CashnetPaymentFindManyArgs
  ): Promise<CashnetPayment[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cashnetPayment(args);
  }

  async findExperience(
    parentId: number,
    args: Prisma.ExperienceFindManyArgs
  ): Promise<Experience[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .experience(args);
  }

  async findFellowships(
    parentId: number,
    args: Prisma.FellowshipFindManyArgs
  ): Promise<Fellowship[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .fellowships(args);
  }

  async findGmatscore(
    parentId: number,
    args: Prisma.GmatscoreFindManyArgs
  ): Promise<Gmatscore[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .gmatscore(args);
  }

  async findGresubjectscore(
    parentId: number,
    args: Prisma.GresubjectscoreFindManyArgs
  ): Promise<Gresubjectscore[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .gresubjectscore(args);
  }

  async findIeltsscore(
    parentId: number,
    args: Prisma.IeltsscoreFindManyArgs
  ): Promise<Ieltsscore[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ieltsscore(args);
  }

  async findLuApplicationAdvisor(
    parentId: number,
    args: Prisma.LuApplicationAdvisorFindManyArgs
  ): Promise<LuApplicationAdvisor[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .luApplicationAdvisor(args);
  }

  async findLuApplicationAppreqs(
    parentId: number,
    args: Prisma.LuApplicationAppreqFindManyArgs
  ): Promise<LuApplicationAppreq[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .luApplicationAppreqs(args);
  }

  async findLuApplicationGroups(
    parentId: number,
    args: Prisma.LuApplicationGroupFindManyArgs
  ): Promise<LuApplicationGroup[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .luApplicationGroups(args);
  }

  async findLuApplicationPrograms(
    parentId: number,
    args: Prisma.LuApplicationProgramFindManyArgs
  ): Promise<LuApplicationProgram[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .luApplicationPrograms(args);
  }

  async findMhciPrereqs(
    parentId: number,
    args: Prisma.MhciPrereqFindManyArgs
  ): Promise<MhciPrereq[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mhciPrereqs(args);
  }

  async findMhciPrereqsCourses(
    parentId: number,
    args: Prisma.MhciPrereqsCourseFindManyArgs
  ): Promise<MhciPrereqsCourse[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mhciPrereqsCourses(args);
  }

  async findMlArea(
    parentId: number,
    args: Prisma.MlAreaFindManyArgs
  ): Promise<MlArea[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mlArea(args);
  }

  async findMlSupportingCoursework(
    parentId: number,
    args: Prisma.MlSupportingCourseworkFindManyArgs
  ): Promise<MlSupportingCoursework[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mlSupportingCoursework(args);
  }

  async findMseAqa(
    parentId: number,
    args: Prisma.MseAqaFindManyArgs
  ): Promise<MseAqa[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mseAqa(args);
  }

  async findPayment(
    parentId: number,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payment(args);
  }

  async findPeriodApplication(
    parentId: number,
    args: Prisma.PeriodApplicationFindManyArgs
  ): Promise<PeriodApplication[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .periodApplication(args);
  }

  async findPromotionHistory(
    parentId: number,
    args: Prisma.PromotionHistoryFindManyArgs
  ): Promise<PromotionHistory[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotionHistory(args);
  }

  async findPublication(
    parentId: number,
    args: Prisma.PublicationFindManyArgs
  ): Promise<Publication[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .publication(args);
  }

  async findRecommend(
    parentId: number,
    args: Prisma.RecommendFindManyArgs
  ): Promise<Recommend[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .recommend(args);
  }

  async findRegistrationFeePayment(
    parentId: number,
    args: Prisma.RegistrationFeePaymentFindManyArgs
  ): Promise<RegistrationFeePayment[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .registrationFeePayment(args);
  }

  async findRegistrationFeeStatus(
    parentId: number,
    args: Prisma.RegistrationFeeStatusFindManyArgs
  ): Promise<RegistrationFeeStatus[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .registrationFeeStatus(args);
  }

  async findReview(
    parentId: number,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .review(args);
  }

  async findRissFunding(
    parentId: number,
    args: Prisma.RissFundingFindManyArgs
  ): Promise<RissFunding[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rissFunding(args);
  }

  async findRissMcnair(
    parentId: number,
    args: Prisma.RissMcnairFindManyArgs
  ): Promise<RissMcnair[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rissMcnair(args);
  }

  async findSpecialConsideration(
    parentId: number,
    args: Prisma.SpecialConsiderationFindManyArgs
  ): Promise<SpecialConsideration[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .specialConsideration(args);
  }

  async findStudentDecision(
    parentId: number,
    args: Prisma.StudentDecisionFindManyArgs
  ): Promise<StudentDecision[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .studentDecision(args);
  }

  async findStudentDecisionHistory(
    parentId: number,
    args: Prisma.StudentDecisionHistoryFindManyArgs
  ): Promise<StudentDecisionHistory[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .studentDecisionHistory(args);
  }

  async findTagMembers(
    parentId: number,
    args: Prisma.TagMemberFindManyArgs
  ): Promise<TagMember[]> {
    return this.prisma.application
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tagMembers(args);
  }

  async getAcoPal(parentId: number): Promise<AcoPal | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .acoPal();
  }

  async getLuApplicationCohort(
    parentId: number
  ): Promise<LuApplicationCohort | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .luApplicationCohort();
  }

  async getLuApplicationStartSemester(
    parentId: number
  ): Promise<LuApplicationStartSemester | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .luApplicationStartSemester();
  }

  async getMseCodility(parentId: number): Promise<MseCodility | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .mseCodility();
  }
}
