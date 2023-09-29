import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { AaDepartmentModule } from "./aaDepartment/aaDepartment.module";
import { AccesslogModule } from "./accesslog/accesslog.module";
import { AccesslogApplicationModule } from "./accesslogApplication/accesslogApplication.module";
import { AccesslogreplyformModule } from "./accesslogreplyform/accesslogreplyform.module";
import { AcoPalModule } from "./acoPal/acoPal.module";
import { AdmissionLetterModule } from "./admissionLetter/admissionLetter.module";
import { AdmissionModule } from "./admission/admission.module";
import { AdvisorModule } from "./advisor/advisor.module";
import { ApplicantIpedsRaceModule } from "./applicantIpedsRace/applicantIpedsRace.module";
import { ApplicationModule } from "./application/application.module";
import { ApplicationAdminNoteModule } from "./applicationAdminNote/applicationAdminNote.module";
import { ApplicationContentModule } from "./applicationContent/applicationContent.module";
import { ApplicationDecisionModule } from "./applicationDecision/applicationDecision.module";
import { ApplicationDecisionIniModule } from "./applicationDecisionIni/applicationDecisionIni.module";
import { ApplicationDecisionSchoolModule } from "./applicationDecisionSchool/applicationDecisionSchool.module";
import { ApplicationMergeFileModule } from "./applicationMergeFile/applicationMergeFile.module";
import { ApplicationPeriodModule } from "./applicationPeriod/applicationPeriod.module";
import { ApplicationProgramLetterModule } from "./applicationProgramLetter/applicationProgramLetter.module";
import { ApplicationreqModule } from "./applicationreq/applicationreq.module";
import { AssistantshipModule } from "./assistantship/assistantship.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { AttendanceStatusModule } from "./attendanceStatus/attendanceStatus.module";
import { BfDepartmentModule } from "./bfDepartment/bfDepartment.module";
import { BlacklistReviewerModule } from "./blacklistReviewer/blacklistReviewer.module";
import { CampusModule } from "./campus/campus.module";
import { CashnetDirectModule } from "./cashnetDirect/cashnetDirect.module";
import { CashnetPaymentModule } from "./cashnetPayment/cashnetPayment.module";
import { CashnetPaymentCopyModule } from "./cashnetPaymentCopy/cashnetPaymentCopy.module";
import { CcAuthNotificationModule } from "./ccAuthNotification/ccAuthNotification.module";
import { CcPaymentStatusModule } from "./ccPaymentStatus/ccPaymentStatus.module";
import { CcTransactionModule } from "./ccTransaction/ccTransaction.module";
import { CcTransactionDetailModule } from "./ccTransactionDetail/ccTransactionDetail.module";
import { CcTransactionReportModule } from "./ccTransactionReport/ccTransactionReport.module";
import { CcTransactionSummaryModule } from "./ccTransactionSummary/ccTransactionSummary.module";
import { CmuAffiliationModule } from "./cmuAffiliation/cmuAffiliation.module";
import { CohortModule } from "./cohort/cohort.module";
import { CommitteeModule } from "./committee/committee.module";
import { ContentModule } from "./content/content.module";
import { ContentBakModule } from "./contentBak/contentBak.module";
import { ContenttypeModule } from "./contenttype/contenttype.module";
import { CountryModule } from "./country/country.module";
import { DatafileTypeModule } from "./datafileType/datafileType.module";
import { DatafileinfoModule } from "./datafileinfo/datafileinfo.module";
import { DecisionAoiRankModule } from "./decisionAoiRank/decisionAoiRank.module";
import { DecisionAoiRankMemberModule } from "./decisionAoiRankMember/decisionAoiRankMember.module";
import { DecisionRankModule } from "./decisionRank/decisionRank.module";
import { DecisionRankMemberModule } from "./decisionRankMember/decisionRankMember.module";
import { DegreeModule } from "./degree/degree.module";
import { DegreeLevelModule } from "./degreeLevel/degreeLevel.module";
import { DegreesallModule } from "./degreesall/degreesall.module";
import { DepartmentModule } from "./department/department.module";
import { DepartmentEnableRecyclingModule } from "./departmentEnableRecycling/departmentEnableRecycling.module";
import { DepartmentReplyperiodModule } from "./departmentReplyperiod/departmentReplyperiod.module";
import { DepartmentUnitModule } from "./departmentUnit/departmentUnit.module";
import { DietrichDiversityModule } from "./dietrichDiversity/dietrichDiversity.module";
import { DietrichFinancialSupportModule } from "./dietrichFinancialSupport/dietrichFinancialSupport.module";
import { DietrichRecognitionModule } from "./dietrichRecognition/dietrichRecognition.module";
import { DietrichSharingModule } from "./dietrichSharing/dietrichSharing.module";
import { DisabilityModule } from "./disability/disability.module";
import { DisabilityTypeModule } from "./disabilityType/disabilityType.module";
import { DomainModule } from "./domain/domain.module";
import { DomainUnitModule } from "./domainUnit/domainUnit.module";
import { DuolingoDatumModule } from "./duolingoDatum/duolingoDatum.module";
import { DuolingoDataCopyModule } from "./duolingoDataCopy/duolingoDataCopy.module";
import { DuolingoscoreModule } from "./duolingoscore/duolingoscore.module";
import { Em2FinancialSupportModule } from "./em2FinancialSupport/em2FinancialSupport.module";
import { Em2SopModule } from "./em2Sop/em2Sop.module";
import { Em2SupportingCourseworkModule } from "./em2SupportingCoursework/em2SupportingCoursework.module";
import { ErrorlogModule } from "./errorlog/errorlog.module";
import { EthnicityModule } from "./ethnicity/ethnicity.module";
import { EtsConfigModule } from "./etsConfig/etsConfig.module";
import { EtsGreModule } from "./etsGre/etsGre.module";
import { EtsGreCopyModule } from "./etsGreCopy/etsGreCopy.module";
import { EtsToeflScoreModule } from "./etsToeflScore/etsToeflScore.module";
import { ExceptionAppModule } from "./exceptionApp/exceptionApp.module";
import { ExperienceModule } from "./experience/experience.module";
import { FailedMergeModule } from "./failedMerge/failedMerge.module";
import { FellowshipModule } from "./fellowship/fellowship.module";
import { FieldsofstudyModule } from "./fieldsofstudy/fieldsofstudy.module";
import { FolderLabelInfoModule } from "./folderLabelInfo/folderLabelInfo.module";
import { GenderModule } from "./gender/gender.module";
import { GmatscoreModule } from "./gmatscore/gmatscore.module";
import { GpascaleModule } from "./gpascale/gpascale.module";
import { GrescoreModule } from "./grescore/grescore.module";
import { GrescoreMscsWaiverModule } from "./grescoreMscsWaiver/grescoreMscsWaiver.module";
import { GresubjectscoreModule } from "./gresubjectscore/gresubjectscore.module";
import { GroupRankModule } from "./groupRank/groupRank.module";
import { GroupRankCommentModule } from "./groupRankComment/groupRankComment.module";
import { GroupRankMemberModule } from "./groupRankMember/groupRankMember.module";
import { HighschoolModule } from "./highschool/highschool.module";
import { IeltsscoreModule } from "./ieltsscore/ieltsscore.module";
import { IniDisciplinaryActionModule } from "./iniDisciplinaryAction/iniDisciplinaryAction.module";
import { IniFinancialSupportModule } from "./iniFinancialSupport/iniFinancialSupport.module";
import { IniSopModule } from "./iniSop/iniSop.module";
import { IniSupportingCourseworkModule } from "./iniSupportingCoursework/iniSupportingCoursework.module";
import { IniSupportingCourseworkKobeModule } from "./iniSupportingCourseworkKobe/iniSupportingCourseworkKobe.module";
import { IniYearsExperienceModule } from "./iniYearsExperience/iniYearsExperience.module";
import { InstituteModule } from "./institute/institute.module";
import { InterestModule } from "./interest/interest.module";
import { IpedsEthnicityModule } from "./ipedsEthnicity/ipedsEthnicity.module";
import { IpedsRaceModule } from "./ipedsRace/ipedsRace.module";
import { JiraIssueModule } from "./jiraIssue/jiraIssue.module";
import { JiravoteModule } from "./jiravote/jiravote.module";
import { LangProfRecommendModule } from "./langProfRecommend/langProfRecommend.module";
import { LangProfRecommenderInfoModule } from "./langProfRecommenderInfo/langProfRecommenderInfo.module";
import { LanguageAssessmentModule } from "./languageAssessment/languageAssessment.module";
import { LanguageAssessmentRatingModule } from "./languageAssessmentRating/languageAssessmentRating.module";
import { LanguageAssessmentStudyLevelModule } from "./languageAssessmentStudyLevel/languageAssessmentStudyLevel.module";
import { LegacyEthnicityModule } from "./legacyEthnicity/legacyEthnicity.module";
import { LtiMastersAdmitModule } from "./ltiMastersAdmit/ltiMastersAdmit.module";
import { LuApplicationAdvisorModule } from "./luApplicationAdvisor/luApplicationAdvisor.module";
import { LuApplicationAppreqModule } from "./luApplicationAppreq/luApplicationAppreq.module";
import { LuApplicationCohortModule } from "./luApplicationCohort/luApplicationCohort.module";
import { LuApplicationEtsgreModule } from "./luApplicationEtsgre/luApplicationEtsgre.module";
import { LuApplicationGroupModule } from "./luApplicationGroup/luApplicationGroup.module";
import { LuApplicationInterestModule } from "./luApplicationInterest/luApplicationInterest.module";
import { LuApplicationProgramModule } from "./luApplicationProgram/luApplicationProgram.module";
import { LuApplicationProgramsHistoryModule } from "./luApplicationProgramsHistory/luApplicationProgramsHistory.module";
import { LuApplicationStartSemesterModule } from "./luApplicationStartSemester/luApplicationStartSemester.module";
import { LuDegreesApplicationreqModule } from "./luDegreesApplicationreq/luDegreesApplicationreq.module";
import { LuDomainDepartmentModule } from "./luDomainDepartment/luDomainDepartment.module";
import { LuProgramsApplicationreqModule } from "./luProgramsApplicationreq/luProgramsApplicationreq.module";
import { LuProgramsDepartmentModule } from "./luProgramsDepartment/luProgramsDepartment.module";
import { LuProgramsInterestModule } from "./luProgramsInterest/luProgramsInterest.module";
import { LuProgramsRecommendationModule } from "./luProgramsRecommendation/luProgramsRecommendation.module";
import { LuReviewInterestModule } from "./luReviewInterest/luReviewInterest.module";
import { LuReviewerGroupModule } from "./luReviewerGroup/luReviewerGroup.module";
import { LuUserDepartmentModule } from "./luUserDepartment/luUserDepartment.module";
import { LuUsersUsertypeModule } from "./luUsersUsertype/luUsersUsertype.module";
import { LuUsersUsertypesHistoryModule } from "./luUsersUsertypesHistory/luUsersUsertypesHistory.module";
import { LuUsersUsertypesOrigModule } from "./luUsersUsertypesOrig/luUsersUsertypesOrig.module";
import { MergeModule } from "./merge/merge.module";
import { MergeApplicationModule } from "./mergeApplication/mergeApplication.module";
import { MergeDatafileModule } from "./mergeDatafile/mergeDatafile.module";
import { MhciPrereqModule } from "./mhciPrereq/mhciPrereq.module";
import { MhciPrereqsConversationCommentModule } from "./mhciPrereqsConversationComment/mhciPrereqsConversationComment.module";
import { MhciPrereqsCourseDatafileModule } from "./mhciPrereqsCourseDatafile/mhciPrereqsCourseDatafile.module";
import { MhciPrereqsCourseModule } from "./mhciPrereqsCourse/mhciPrereqsCourse.module";
import { MhciPrereqsDesignPortfolioModule } from "./mhciPrereqsDesignPortfolio/mhciPrereqsDesignPortfolio.module";
import { MhciPrereqsProgrammingSampleModule } from "./mhciPrereqsProgrammingSample/mhciPrereqsProgrammingSample.module";
import { MhciPrereqsProgrammingTestModule } from "./mhciPrereqsProgrammingTest/mhciPrereqsProgrammingTest.module";
import { MhciPrereqsReferenceModule } from "./mhciPrereqsReference/mhciPrereqsReference.module";
import { MhciPrereqsReviewerModule } from "./mhciPrereqsReviewer/mhciPrereqsReviewer.module";
import { MhciPrereqsStatusModule } from "./mhciPrereqsStatus/mhciPrereqsStatus.module";
import { MhciSlateAppSchoolModule } from "./mhciSlateAppSchool/mhciSlateAppSchool.module";
import { MhciSlateAppModule } from "./mhciSlateApp/mhciSlateApp.module";
import { MhciSlateGreModule } from "./mhciSlateGre/mhciSlateGre.module";
import { MhciSlateIeltModule } from "./mhciSlateIelt/mhciSlateIelt.module";
import { MhciSlatePubModule } from "./mhciSlatePub/mhciSlatePub.module";
import { MhciSlateToeflModule } from "./mhciSlateToefl/mhciSlateToefl.module";
import { MitsSlateAppSchoolModule } from "./mitsSlateAppSchool/mitsSlateAppSchool.module";
import { MitsSlateAppModule } from "./mitsSlateApp/mitsSlateApp.module";
import { MitsSlateAppsMseReviewedModule } from "./mitsSlateAppsMseReviewed/mitsSlateAppsMseReviewed.module";
import { MitsSlateCodilityModule } from "./mitsSlateCodility/mitsSlateCodility.module";
import { MitsSlateEmployModule } from "./mitsSlateEmploy/mitsSlateEmploy.module";
import { MitsSlateGreModule } from "./mitsSlateGre/mitsSlateGre.module";
import { MitsSlateIeltModule } from "./mitsSlateIelt/mitsSlateIelt.module";
import { MitsSlatePubModule } from "./mitsSlatePub/mitsSlatePub.module";
import { MitsSlateRecommendModule } from "./mitsSlateRecommend/mitsSlateRecommend.module";
import { MitsSlateRecommend1Module } from "./mitsSlateRecommend1/mitsSlateRecommend1.module";
import { MitsSlateRecommend2Module } from "./mitsSlateRecommend2/mitsSlateRecommend2.module";
import { MitsSlateRecommend3Module } from "./mitsSlateRecommend3/mitsSlateRecommend3.module";
import { MitsSlateReviewModule } from "./mitsSlateReview/mitsSlateReview.module";
import { MitsSlateSuppinfoModule } from "./mitsSlateSuppinfo/mitsSlateSuppinfo.module";
import { MitsSlateToeflModule } from "./mitsSlateToefl/mitsSlateToefl.module";
import { MlAreaModule } from "./mlArea/mlArea.module";
import { MlSupportingCourseworkModule } from "./mlSupportingCoursework/mlSupportingCoursework.module";
import { MseAqaModule } from "./mseAqa/mseAqa.module";
import { MseBridgeCourseModule } from "./mseBridgeCourse/mseBridgeCourse.module";
import { MseBridgeCourseDecisionModule } from "./mseBridgeCourseDecision/mseBridgeCourseDecision.module";
import { MseCodilityModule } from "./mseCodility/mseCodility.module";
import { MseInterviewModule } from "./mseInterview/mseInterview.module";
import { MseLetterRecModule } from "./mseLetterRec/mseLetterRec.module";
import { MseLetterRecsDecisionModule } from "./mseLetterRecsDecision/mseLetterRecsDecision.module";
import { MseRiskFactorModule } from "./mseRiskFactor/mseRiskFactor.module";
import { MseRiskFactorsDecisionModule } from "./mseRiskFactorsDecision/mseRiskFactorsDecision.module";
import { MseSupportingCourseworkModule } from "./mseSupportingCoursework/mseSupportingCoursework.module";
import { MultiprogramlockoutModule } from "./multiprogramlockout/multiprogramlockout.module";
import { ParentInfoModule } from "./parentInfo/parentInfo.module";
import { PaymentModule } from "./payment/payment.module";
import { PaymentAuditModule } from "./paymentAudit/paymentAudit.module";
import { PaymentItemModule } from "./paymentItem/paymentItem.module";
import { PaymentNewModule } from "./paymentNew/paymentNew.module";
import { PaymentVoucherModule } from "./paymentVoucher/paymentVoucher.module";
import { PeSlateAppModule } from "./peSlateApp/peSlateApp.module";
import { PeriodModule } from "./period/period.module";
import { PeriodApplicationModule } from "./periodApplication/periodApplication.module";
import { PeriodProgramModule } from "./periodProgram/periodProgram.module";
import { PeriodTypeModule } from "./periodType/periodType.module";
import { PeriodUmbrellaModule } from "./periodUmbrella/periodUmbrella.module";
import { PhoneScreenModule } from "./phoneScreen/phoneScreen.module";
import { PositiveFactorModule } from "./positiveFactor/positiveFactor.module";
import { ProgramModule } from "./program/program.module";
import { ProgramGroupModule } from "./programGroup/programGroup.module";
import { ProgramGroupGroupTypeModule } from "./programGroupGroupType/programGroupGroupType.module";
import { ProgramGroupProgramModule } from "./programGroupProgram/programGroupProgram.module";
import { ProgramGroupRoleModule } from "./programGroupRole/programGroupRole.module";
import { ProgramGroupTypeModule } from "./programGroupType/programGroupType.module";
import { ProgramTypeModule } from "./programType/programType.module";
import { ProgramModelModule } from "./programModel/programModel.module";
import { ProgramsApplicationreqModule } from "./programsApplicationreq/programsApplicationreq.module";
import { ProgramsUnitModule } from "./programsUnit/programsUnit.module";
import { PromotionHistoryModule } from "./promotionHistory/promotionHistory.module";
import { PromotionHistoryCopyModule } from "./promotionHistoryCopy/promotionHistoryCopy.module";
import { PromotionStatusModule } from "./promotionStatus/promotionStatus.module";
import { PublicationModule } from "./publication/publication.module";
import { ReclogModule } from "./reclog/reclog.module";
import { RecommendModule } from "./recommend/recommend.module";
import { RecommendationtypeModule } from "./recommendationtype/recommendationtype.module";
import { RecommenderInfoModule } from "./recommenderInfo/recommenderInfo.module";
import { RecommendformModule } from "./recommendform/recommendform.module";
import { RecyclableSelectionModule } from "./recyclableSelection/recyclableSelection.module";
import { RegistrationFeePaymentModule } from "./registrationFeePayment/registrationFeePayment.module";
import { RegistrationFeeStatusModule } from "./registrationFeeStatus/registrationFeeStatus.module";
import { RejectionWaiverModule } from "./rejectionWaiver/rejectionWaiver.module";
import { RequestsAccessModule } from "./requestsAccess/requestsAccess.module";
import { RevgroupModule } from "./revgroup/revgroup.module";
import { ReviewModule } from "./review/review.module";
import { ReviewIniModule } from "./reviewIni/reviewIni.module";
import { ReviewIniAdminModule } from "./reviewIniAdmin/reviewIniAdmin.module";
import { ReviewIniAlternativeProgramModule } from "./reviewIniAlternativeProgram/reviewIniAlternativeProgram.module";
import { ReviewIniExperienceScaleModule } from "./reviewIniExperienceScale/reviewIniExperienceScale.module";
import { ReviewIniOverallScaleModule } from "./reviewIniOverallScale/reviewIniOverallScale.module";
import { ReviewPositiveFactorModule } from "./reviewPositiveFactor/reviewPositiveFactor.module";
import { ReviewPositiveFactorOtherModule } from "./reviewPositiveFactorOther/reviewPositiveFactorOther.module";
import { ReviewRiskFactorModule } from "./reviewRiskFactor/reviewRiskFactor.module";
import { ReviewRiskFactorOtherModule } from "./reviewRiskFactorOther/reviewRiskFactorOther.module";
import { ReviewerPreferenceModule } from "./reviewerPreference/reviewerPreference.module";
import { RiskFactorModule } from "./riskFactor/riskFactor.module";
import { RissFundingModule } from "./rissFunding/rissFunding.module";
import { RissMcnairModule } from "./rissMcnair/rissMcnair.module";
import { SchoolModule } from "./school/school.module";
import { ScsUserModule } from "./scsUser/scsUser.module";
import { ScsUserWebisoModule } from "./scsUserWebiso/scsUserWebiso.module";
import { SearchTextTestModule } from "./searchTextTest/searchTextTest.module";
import { SelfGenderModule } from "./selfGender/selfGender.module";
import { SemPreviousCourseModule } from "./semPreviousCourse/semPreviousCourse.module";
import { SlateAppSchoolModule } from "./slateAppSchool/slateAppSchool.module";
import { SlateAppModule } from "./slateApp/slateApp.module";
import { SlateAppsMseReviewedModule } from "./slateAppsMseReviewed/slateAppsMseReviewed.module";
import { SlateAwAppIdModule } from "./slateAwAppId/slateAwAppId.module";
import { SlateCodilityModule } from "./slateCodility/slateCodility.module";
import { SlateEmail2AwUserModule } from "./slateEmail2AwUser/slateEmail2AwUser.module";
import { SlateEmployModule } from "./slateEmploy/slateEmploy.module";
import { SlateIeltModule } from "./slateIelt/slateIelt.module";
import { SlateLangCodeModule } from "./slateLangCode/slateLangCode.module";
import { SlateMaterialModule } from "./slateMaterial/slateMaterial.module";
import { SlateOrgModule } from "./slateOrg/slateOrg.module";
import { SlateOrgsAllModule } from "./slateOrgsAll/slateOrgsAll.module";
import { SlateProgramModule } from "./slateProgram/slateProgram.module";
import { SlateProgramsMseReviewedModule } from "./slateProgramsMseReviewed/slateProgramsMseReviewed.module";
import { SlatePubModule } from "./slatePub/slatePub.module";
import { SlateRecommendModule } from "./slateRecommend/slateRecommend.module";
import { SlateRecommend1Module } from "./slateRecommend1/slateRecommend1.module";
import { SlateRecommend2Module } from "./slateRecommend2/slateRecommend2.module";
import { SlateRecommend3Module } from "./slateRecommend3/slateRecommend3.module";
import { SlateReviewModule } from "./slateReview/slateReview.module";
import { SlateSuppinfoModule } from "./slateSuppinfo/slateSuppinfo.module";
import { SlateTestScoreModule } from "./slateTestScore/slateTestScore.module";
import { SlateToeflModule } from "./slateToefl/slateToefl.module";
import { SpecialConsiderationModule } from "./specialConsideration/specialConsideration.module";
import { StateModule } from "./state/state.module";
import { StudentDecisionModule } from "./studentDecision/studentDecision.module";
import { StudentDecisionHistoryModule } from "./studentDecisionHistory/studentDecisionHistory.module";
import { StudentDecisionUniversityModule } from "./studentDecisionUniversity/studentDecisionUniversity.module";
import { SystemenvModule } from "./systemenv/systemenv.module";
import { TagModule } from "./tag/tag.module";
import { TagMemberModule } from "./tagMember/tagMember.module";
import { TagInstanceModule } from "./tagInstance/tagInstance.module";
import { TeachingExperienceModule } from "./teachingExperience/teachingExperience.module";
import { TesttableforBansheeModule } from "./testtableforBanshee/testtableforBanshee.module";
import { TestusersInfoModule } from "./testusersInfo/testusersInfo.module";
import { ToeflModule } from "./toefl/toefl.module";
import { ToeflEssentialModule } from "./toeflEssential/toeflEssential.module";
import { ToeflItpPlusModule } from "./toeflItpPlus/toeflItpPlus.module";
import { UnitModule } from "./unit/unit.module";
import { UnitPeriodModule } from "./unitPeriod/unitPeriod.module";
import { UnitRoleModule } from "./unitRole/unitRole.module";
import { UsHsStatusModule } from "./usHsStatus/usHsStatus.module";
import { UserModule } from "./user/user.module";
import { UsersInfoModule } from "./usersInfo/usersInfo.module";
import { UsersOrigModule } from "./usersOrig/usersOrig.module";
import { UsersRemoteAuthStringModule } from "./usersRemoteAuthString/usersRemoteAuthString.module";
import { UsersinstModule } from "./usersinst/usersinst.module";
import { UsertypeModule } from "./usertype/usertype.module";
import { VeteranInfoModule } from "./veteranInfo/veteranInfo.module";
import { VideoEssayModule } from "./videoEssay/videoEssay.module";
import { VisatypeModule } from "./visatype/visatype.module";
import { VoucherModule } from "./voucher/voucher.module";
import { VoucherApplicationModule } from "./voucherApplication/voucherApplication.module";
import { VoucherApplicationErrorModule } from "./voucherApplicationError/voucherApplicationError.module";
import { VoucherProgramModule } from "./voucherProgram/voucherProgram.module";
import { VoucherTypeModule } from "./voucherType/voucherType.module";
import { WaiverApplicationModule } from "./waiverApplication/waiverApplication.module";
import { WaiverOrgModule } from "./waiverOrg/waiverOrg.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    AaDepartmentModule,
    AccesslogModule,
    AccesslogApplicationModule,
    AccesslogreplyformModule,
    AcoPalModule,
    AdmissionLetterModule,
    AdmissionModule,
    AdvisorModule,
    ApplicantIpedsRaceModule,
    ApplicationModule,
    ApplicationAdminNoteModule,
    ApplicationContentModule,
    ApplicationDecisionModule,
    ApplicationDecisionIniModule,
    ApplicationDecisionSchoolModule,
    ApplicationMergeFileModule,
    ApplicationPeriodModule,
    ApplicationProgramLetterModule,
    ApplicationreqModule,
    AssistantshipModule,
    AttendanceModule,
    AttendanceStatusModule,
    BfDepartmentModule,
    BlacklistReviewerModule,
    CampusModule,
    CashnetDirectModule,
    CashnetPaymentModule,
    CashnetPaymentCopyModule,
    CcAuthNotificationModule,
    CcPaymentStatusModule,
    CcTransactionModule,
    CcTransactionDetailModule,
    CcTransactionReportModule,
    CcTransactionSummaryModule,
    CmuAffiliationModule,
    CohortModule,
    CommitteeModule,
    ContentModule,
    ContentBakModule,
    ContenttypeModule,
    CountryModule,
    DatafileTypeModule,
    DatafileinfoModule,
    DecisionAoiRankModule,
    DecisionAoiRankMemberModule,
    DecisionRankModule,
    DecisionRankMemberModule,
    DegreeModule,
    DegreeLevelModule,
    DegreesallModule,
    DepartmentModule,
    DepartmentEnableRecyclingModule,
    DepartmentReplyperiodModule,
    DepartmentUnitModule,
    DietrichDiversityModule,
    DietrichFinancialSupportModule,
    DietrichRecognitionModule,
    DietrichSharingModule,
    DisabilityModule,
    DisabilityTypeModule,
    DomainModule,
    DomainUnitModule,
    DuolingoDatumModule,
    DuolingoDataCopyModule,
    DuolingoscoreModule,
    Em2FinancialSupportModule,
    Em2SopModule,
    Em2SupportingCourseworkModule,
    ErrorlogModule,
    EthnicityModule,
    EtsConfigModule,
    EtsGreModule,
    EtsGreCopyModule,
    EtsToeflScoreModule,
    ExceptionAppModule,
    ExperienceModule,
    FailedMergeModule,
    FellowshipModule,
    FieldsofstudyModule,
    FolderLabelInfoModule,
    GenderModule,
    GmatscoreModule,
    GpascaleModule,
    GrescoreModule,
    GrescoreMscsWaiverModule,
    GresubjectscoreModule,
    GroupRankModule,
    GroupRankCommentModule,
    GroupRankMemberModule,
    HighschoolModule,
    IeltsscoreModule,
    IniDisciplinaryActionModule,
    IniFinancialSupportModule,
    IniSopModule,
    IniSupportingCourseworkModule,
    IniSupportingCourseworkKobeModule,
    IniYearsExperienceModule,
    InstituteModule,
    InterestModule,
    IpedsEthnicityModule,
    IpedsRaceModule,
    JiraIssueModule,
    JiravoteModule,
    LangProfRecommendModule,
    LangProfRecommenderInfoModule,
    LanguageAssessmentModule,
    LanguageAssessmentRatingModule,
    LanguageAssessmentStudyLevelModule,
    LegacyEthnicityModule,
    LtiMastersAdmitModule,
    LuApplicationAdvisorModule,
    LuApplicationAppreqModule,
    LuApplicationCohortModule,
    LuApplicationEtsgreModule,
    LuApplicationGroupModule,
    LuApplicationInterestModule,
    LuApplicationProgramModule,
    LuApplicationProgramsHistoryModule,
    LuApplicationStartSemesterModule,
    LuDegreesApplicationreqModule,
    LuDomainDepartmentModule,
    LuProgramsApplicationreqModule,
    LuProgramsDepartmentModule,
    LuProgramsInterestModule,
    LuProgramsRecommendationModule,
    LuReviewInterestModule,
    LuReviewerGroupModule,
    LuUserDepartmentModule,
    LuUsersUsertypeModule,
    LuUsersUsertypesHistoryModule,
    LuUsersUsertypesOrigModule,
    MergeModule,
    MergeApplicationModule,
    MergeDatafileModule,
    MhciPrereqModule,
    MhciPrereqsConversationCommentModule,
    MhciPrereqsCourseDatafileModule,
    MhciPrereqsCourseModule,
    MhciPrereqsDesignPortfolioModule,
    MhciPrereqsProgrammingSampleModule,
    MhciPrereqsProgrammingTestModule,
    MhciPrereqsReferenceModule,
    MhciPrereqsReviewerModule,
    MhciPrereqsStatusModule,
    MhciSlateAppSchoolModule,
    MhciSlateAppModule,
    MhciSlateGreModule,
    MhciSlateIeltModule,
    MhciSlatePubModule,
    MhciSlateToeflModule,
    MitsSlateAppSchoolModule,
    MitsSlateAppModule,
    MitsSlateAppsMseReviewedModule,
    MitsSlateCodilityModule,
    MitsSlateEmployModule,
    MitsSlateGreModule,
    MitsSlateIeltModule,
    MitsSlatePubModule,
    MitsSlateRecommendModule,
    MitsSlateRecommend1Module,
    MitsSlateRecommend2Module,
    MitsSlateRecommend3Module,
    MitsSlateReviewModule,
    MitsSlateSuppinfoModule,
    MitsSlateToeflModule,
    MlAreaModule,
    MlSupportingCourseworkModule,
    MseAqaModule,
    MseBridgeCourseModule,
    MseBridgeCourseDecisionModule,
    MseCodilityModule,
    MseInterviewModule,
    MseLetterRecModule,
    MseLetterRecsDecisionModule,
    MseRiskFactorModule,
    MseRiskFactorsDecisionModule,
    MseSupportingCourseworkModule,
    MultiprogramlockoutModule,
    ParentInfoModule,
    PaymentModule,
    PaymentAuditModule,
    PaymentItemModule,
    PaymentNewModule,
    PaymentVoucherModule,
    PeSlateAppModule,
    PeriodModule,
    PeriodApplicationModule,
    PeriodProgramModule,
    PeriodTypeModule,
    PeriodUmbrellaModule,
    PhoneScreenModule,
    PositiveFactorModule,
    ProgramModule,
    ProgramGroupModule,
    ProgramGroupGroupTypeModule,
    ProgramGroupProgramModule,
    ProgramGroupRoleModule,
    ProgramGroupTypeModule,
    ProgramTypeModule,
    ProgramModelModule,
    ProgramsApplicationreqModule,
    ProgramsUnitModule,
    PromotionHistoryModule,
    PromotionHistoryCopyModule,
    PromotionStatusModule,
    PublicationModule,
    ReclogModule,
    RecommendModule,
    RecommendationtypeModule,
    RecommenderInfoModule,
    RecommendformModule,
    RecyclableSelectionModule,
    RegistrationFeePaymentModule,
    RegistrationFeeStatusModule,
    RejectionWaiverModule,
    RequestsAccessModule,
    RevgroupModule,
    ReviewModule,
    ReviewIniModule,
    ReviewIniAdminModule,
    ReviewIniAlternativeProgramModule,
    ReviewIniExperienceScaleModule,
    ReviewIniOverallScaleModule,
    ReviewPositiveFactorModule,
    ReviewPositiveFactorOtherModule,
    ReviewRiskFactorModule,
    ReviewRiskFactorOtherModule,
    ReviewerPreferenceModule,
    RiskFactorModule,
    RissFundingModule,
    RissMcnairModule,
    SchoolModule,
    ScsUserModule,
    ScsUserWebisoModule,
    SearchTextTestModule,
    SelfGenderModule,
    SemPreviousCourseModule,
    SlateAppSchoolModule,
    SlateAppModule,
    SlateAppsMseReviewedModule,
    SlateAwAppIdModule,
    SlateCodilityModule,
    SlateEmail2AwUserModule,
    SlateEmployModule,
    SlateIeltModule,
    SlateLangCodeModule,
    SlateMaterialModule,
    SlateOrgModule,
    SlateOrgsAllModule,
    SlateProgramModule,
    SlateProgramsMseReviewedModule,
    SlatePubModule,
    SlateRecommendModule,
    SlateRecommend1Module,
    SlateRecommend2Module,
    SlateRecommend3Module,
    SlateReviewModule,
    SlateSuppinfoModule,
    SlateTestScoreModule,
    SlateToeflModule,
    SpecialConsiderationModule,
    StateModule,
    StudentDecisionModule,
    StudentDecisionHistoryModule,
    StudentDecisionUniversityModule,
    SystemenvModule,
    TagModule,
    TagMemberModule,
    TagInstanceModule,
    TeachingExperienceModule,
    TesttableforBansheeModule,
    TestusersInfoModule,
    ToeflModule,
    ToeflEssentialModule,
    ToeflItpPlusModule,
    UnitModule,
    UnitPeriodModule,
    UnitRoleModule,
    UsHsStatusModule,
    UserModule,
    UsersInfoModule,
    UsersOrigModule,
    UsersRemoteAuthStringModule,
    UsersinstModule,
    UsertypeModule,
    VeteranInfoModule,
    VideoEssayModule,
    VisatypeModule,
    VoucherModule,
    VoucherApplicationModule,
    VoucherApplicationErrorModule,
    VoucherProgramModule,
    VoucherTypeModule,
    WaiverApplicationModule,
    WaiverOrgModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
