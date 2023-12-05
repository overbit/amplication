import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AaDepartmentList } from "./aaDepartment/AaDepartmentList";
import { AaDepartmentCreate } from "./aaDepartment/AaDepartmentCreate";
import { AaDepartmentEdit } from "./aaDepartment/AaDepartmentEdit";
import { AaDepartmentShow } from "./aaDepartment/AaDepartmentShow";
import { AccesslogList } from "./accesslog/AccesslogList";
import { AccesslogCreate } from "./accesslog/AccesslogCreate";
import { AccesslogEdit } from "./accesslog/AccesslogEdit";
import { AccesslogShow } from "./accesslog/AccesslogShow";
import { AccesslogApplicationList } from "./accesslogApplication/AccesslogApplicationList";
import { AccesslogApplicationCreate } from "./accesslogApplication/AccesslogApplicationCreate";
import { AccesslogApplicationEdit } from "./accesslogApplication/AccesslogApplicationEdit";
import { AccesslogApplicationShow } from "./accesslogApplication/AccesslogApplicationShow";
import { AccesslogreplyformList } from "./accesslogreplyform/AccesslogreplyformList";
import { AccesslogreplyformCreate } from "./accesslogreplyform/AccesslogreplyformCreate";
import { AccesslogreplyformEdit } from "./accesslogreplyform/AccesslogreplyformEdit";
import { AccesslogreplyformShow } from "./accesslogreplyform/AccesslogreplyformShow";
import { AcoPalList } from "./acoPal/AcoPalList";
import { AcoPalCreate } from "./acoPal/AcoPalCreate";
import { AcoPalEdit } from "./acoPal/AcoPalEdit";
import { AcoPalShow } from "./acoPal/AcoPalShow";
import { AdmissionLetterList } from "./admissionLetter/AdmissionLetterList";
import { AdmissionLetterCreate } from "./admissionLetter/AdmissionLetterCreate";
import { AdmissionLetterEdit } from "./admissionLetter/AdmissionLetterEdit";
import { AdmissionLetterShow } from "./admissionLetter/AdmissionLetterShow";
import { AdmissionList } from "./admission/AdmissionList";
import { AdmissionCreate } from "./admission/AdmissionCreate";
import { AdmissionEdit } from "./admission/AdmissionEdit";
import { AdmissionShow } from "./admission/AdmissionShow";
import { AdvisorList } from "./advisor/AdvisorList";
import { AdvisorCreate } from "./advisor/AdvisorCreate";
import { AdvisorEdit } from "./advisor/AdvisorEdit";
import { AdvisorShow } from "./advisor/AdvisorShow";
import { ApplicantIpedsRaceList } from "./applicantIpedsRace/ApplicantIpedsRaceList";
import { ApplicantIpedsRaceCreate } from "./applicantIpedsRace/ApplicantIpedsRaceCreate";
import { ApplicantIpedsRaceEdit } from "./applicantIpedsRace/ApplicantIpedsRaceEdit";
import { ApplicantIpedsRaceShow } from "./applicantIpedsRace/ApplicantIpedsRaceShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ApplicationAdminNoteList } from "./applicationAdminNote/ApplicationAdminNoteList";
import { ApplicationAdminNoteCreate } from "./applicationAdminNote/ApplicationAdminNoteCreate";
import { ApplicationAdminNoteEdit } from "./applicationAdminNote/ApplicationAdminNoteEdit";
import { ApplicationAdminNoteShow } from "./applicationAdminNote/ApplicationAdminNoteShow";
import { ApplicationContentList } from "./applicationContent/ApplicationContentList";
import { ApplicationContentCreate } from "./applicationContent/ApplicationContentCreate";
import { ApplicationContentEdit } from "./applicationContent/ApplicationContentEdit";
import { ApplicationContentShow } from "./applicationContent/ApplicationContentShow";
import { ApplicationDecisionList } from "./applicationDecision/ApplicationDecisionList";
import { ApplicationDecisionCreate } from "./applicationDecision/ApplicationDecisionCreate";
import { ApplicationDecisionEdit } from "./applicationDecision/ApplicationDecisionEdit";
import { ApplicationDecisionShow } from "./applicationDecision/ApplicationDecisionShow";
import { ApplicationDecisionIniList } from "./applicationDecisionIni/ApplicationDecisionIniList";
import { ApplicationDecisionIniCreate } from "./applicationDecisionIni/ApplicationDecisionIniCreate";
import { ApplicationDecisionIniEdit } from "./applicationDecisionIni/ApplicationDecisionIniEdit";
import { ApplicationDecisionIniShow } from "./applicationDecisionIni/ApplicationDecisionIniShow";
import { ApplicationDecisionSchoolList } from "./applicationDecisionSchool/ApplicationDecisionSchoolList";
import { ApplicationDecisionSchoolCreate } from "./applicationDecisionSchool/ApplicationDecisionSchoolCreate";
import { ApplicationDecisionSchoolEdit } from "./applicationDecisionSchool/ApplicationDecisionSchoolEdit";
import { ApplicationDecisionSchoolShow } from "./applicationDecisionSchool/ApplicationDecisionSchoolShow";
import { ApplicationMergeFileList } from "./applicationMergeFile/ApplicationMergeFileList";
import { ApplicationMergeFileCreate } from "./applicationMergeFile/ApplicationMergeFileCreate";
import { ApplicationMergeFileEdit } from "./applicationMergeFile/ApplicationMergeFileEdit";
import { ApplicationMergeFileShow } from "./applicationMergeFile/ApplicationMergeFileShow";
import { ApplicationPeriodList } from "./applicationPeriod/ApplicationPeriodList";
import { ApplicationPeriodCreate } from "./applicationPeriod/ApplicationPeriodCreate";
import { ApplicationPeriodEdit } from "./applicationPeriod/ApplicationPeriodEdit";
import { ApplicationPeriodShow } from "./applicationPeriod/ApplicationPeriodShow";
import { ApplicationProgramLetterList } from "./applicationProgramLetter/ApplicationProgramLetterList";
import { ApplicationProgramLetterCreate } from "./applicationProgramLetter/ApplicationProgramLetterCreate";
import { ApplicationProgramLetterEdit } from "./applicationProgramLetter/ApplicationProgramLetterEdit";
import { ApplicationProgramLetterShow } from "./applicationProgramLetter/ApplicationProgramLetterShow";
import { ApplicationreqList } from "./applicationreq/ApplicationreqList";
import { ApplicationreqCreate } from "./applicationreq/ApplicationreqCreate";
import { ApplicationreqEdit } from "./applicationreq/ApplicationreqEdit";
import { ApplicationreqShow } from "./applicationreq/ApplicationreqShow";
import { AssistantshipList } from "./assistantship/AssistantshipList";
import { AssistantshipCreate } from "./assistantship/AssistantshipCreate";
import { AssistantshipEdit } from "./assistantship/AssistantshipEdit";
import { AssistantshipShow } from "./assistantship/AssistantshipShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { AttendanceStatusList } from "./attendanceStatus/AttendanceStatusList";
import { AttendanceStatusCreate } from "./attendanceStatus/AttendanceStatusCreate";
import { AttendanceStatusEdit } from "./attendanceStatus/AttendanceStatusEdit";
import { AttendanceStatusShow } from "./attendanceStatus/AttendanceStatusShow";
import { BfDepartmentList } from "./bfDepartment/BfDepartmentList";
import { BfDepartmentCreate } from "./bfDepartment/BfDepartmentCreate";
import { BfDepartmentEdit } from "./bfDepartment/BfDepartmentEdit";
import { BfDepartmentShow } from "./bfDepartment/BfDepartmentShow";
import { BlacklistReviewerList } from "./blacklistReviewer/BlacklistReviewerList";
import { BlacklistReviewerCreate } from "./blacklistReviewer/BlacklistReviewerCreate";
import { BlacklistReviewerEdit } from "./blacklistReviewer/BlacklistReviewerEdit";
import { BlacklistReviewerShow } from "./blacklistReviewer/BlacklistReviewerShow";
import { CampusList } from "./campus/CampusList";
import { CampusCreate } from "./campus/CampusCreate";
import { CampusEdit } from "./campus/CampusEdit";
import { CampusShow } from "./campus/CampusShow";
import { CashnetDirectList } from "./cashnetDirect/CashnetDirectList";
import { CashnetDirectCreate } from "./cashnetDirect/CashnetDirectCreate";
import { CashnetDirectEdit } from "./cashnetDirect/CashnetDirectEdit";
import { CashnetDirectShow } from "./cashnetDirect/CashnetDirectShow";
import { CashnetPaymentList } from "./cashnetPayment/CashnetPaymentList";
import { CashnetPaymentCreate } from "./cashnetPayment/CashnetPaymentCreate";
import { CashnetPaymentEdit } from "./cashnetPayment/CashnetPaymentEdit";
import { CashnetPaymentShow } from "./cashnetPayment/CashnetPaymentShow";
import { CashnetPaymentCopyList } from "./cashnetPaymentCopy/CashnetPaymentCopyList";
import { CashnetPaymentCopyCreate } from "./cashnetPaymentCopy/CashnetPaymentCopyCreate";
import { CashnetPaymentCopyEdit } from "./cashnetPaymentCopy/CashnetPaymentCopyEdit";
import { CashnetPaymentCopyShow } from "./cashnetPaymentCopy/CashnetPaymentCopyShow";
import { CcAuthNotificationList } from "./ccAuthNotification/CcAuthNotificationList";
import { CcAuthNotificationCreate } from "./ccAuthNotification/CcAuthNotificationCreate";
import { CcAuthNotificationEdit } from "./ccAuthNotification/CcAuthNotificationEdit";
import { CcAuthNotificationShow } from "./ccAuthNotification/CcAuthNotificationShow";
import { CcPaymentStatusList } from "./ccPaymentStatus/CcPaymentStatusList";
import { CcPaymentStatusCreate } from "./ccPaymentStatus/CcPaymentStatusCreate";
import { CcPaymentStatusEdit } from "./ccPaymentStatus/CcPaymentStatusEdit";
import { CcPaymentStatusShow } from "./ccPaymentStatus/CcPaymentStatusShow";
import { CcTransactionList } from "./ccTransaction/CcTransactionList";
import { CcTransactionCreate } from "./ccTransaction/CcTransactionCreate";
import { CcTransactionEdit } from "./ccTransaction/CcTransactionEdit";
import { CcTransactionShow } from "./ccTransaction/CcTransactionShow";
import { CcTransactionDetailList } from "./ccTransactionDetail/CcTransactionDetailList";
import { CcTransactionDetailCreate } from "./ccTransactionDetail/CcTransactionDetailCreate";
import { CcTransactionDetailEdit } from "./ccTransactionDetail/CcTransactionDetailEdit";
import { CcTransactionDetailShow } from "./ccTransactionDetail/CcTransactionDetailShow";
import { CcTransactionReportList } from "./ccTransactionReport/CcTransactionReportList";
import { CcTransactionReportCreate } from "./ccTransactionReport/CcTransactionReportCreate";
import { CcTransactionReportEdit } from "./ccTransactionReport/CcTransactionReportEdit";
import { CcTransactionReportShow } from "./ccTransactionReport/CcTransactionReportShow";
import { CcTransactionSummaryList } from "./ccTransactionSummary/CcTransactionSummaryList";
import { CcTransactionSummaryCreate } from "./ccTransactionSummary/CcTransactionSummaryCreate";
import { CcTransactionSummaryEdit } from "./ccTransactionSummary/CcTransactionSummaryEdit";
import { CcTransactionSummaryShow } from "./ccTransactionSummary/CcTransactionSummaryShow";
import { CmuAffiliationList } from "./cmuAffiliation/CmuAffiliationList";
import { CmuAffiliationCreate } from "./cmuAffiliation/CmuAffiliationCreate";
import { CmuAffiliationEdit } from "./cmuAffiliation/CmuAffiliationEdit";
import { CmuAffiliationShow } from "./cmuAffiliation/CmuAffiliationShow";
import { CohortList } from "./cohort/CohortList";
import { CohortCreate } from "./cohort/CohortCreate";
import { CohortEdit } from "./cohort/CohortEdit";
import { CohortShow } from "./cohort/CohortShow";
import { CommitteeList } from "./committee/CommitteeList";
import { CommitteeCreate } from "./committee/CommitteeCreate";
import { CommitteeEdit } from "./committee/CommitteeEdit";
import { CommitteeShow } from "./committee/CommitteeShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { ContentBakList } from "./contentBak/ContentBakList";
import { ContentBakCreate } from "./contentBak/ContentBakCreate";
import { ContentBakEdit } from "./contentBak/ContentBakEdit";
import { ContentBakShow } from "./contentBak/ContentBakShow";
import { ContenttypeList } from "./contenttype/ContenttypeList";
import { ContenttypeCreate } from "./contenttype/ContenttypeCreate";
import { ContenttypeEdit } from "./contenttype/ContenttypeEdit";
import { ContenttypeShow } from "./contenttype/ContenttypeShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { DatafileTypeList } from "./datafileType/DatafileTypeList";
import { DatafileTypeCreate } from "./datafileType/DatafileTypeCreate";
import { DatafileTypeEdit } from "./datafileType/DatafileTypeEdit";
import { DatafileTypeShow } from "./datafileType/DatafileTypeShow";
import { DatafileinfoList } from "./datafileinfo/DatafileinfoList";
import { DatafileinfoCreate } from "./datafileinfo/DatafileinfoCreate";
import { DatafileinfoEdit } from "./datafileinfo/DatafileinfoEdit";
import { DatafileinfoShow } from "./datafileinfo/DatafileinfoShow";
import { DecisionAoiRankList } from "./decisionAoiRank/DecisionAoiRankList";
import { DecisionAoiRankCreate } from "./decisionAoiRank/DecisionAoiRankCreate";
import { DecisionAoiRankEdit } from "./decisionAoiRank/DecisionAoiRankEdit";
import { DecisionAoiRankShow } from "./decisionAoiRank/DecisionAoiRankShow";
import { DecisionAoiRankMemberList } from "./decisionAoiRankMember/DecisionAoiRankMemberList";
import { DecisionAoiRankMemberCreate } from "./decisionAoiRankMember/DecisionAoiRankMemberCreate";
import { DecisionAoiRankMemberEdit } from "./decisionAoiRankMember/DecisionAoiRankMemberEdit";
import { DecisionAoiRankMemberShow } from "./decisionAoiRankMember/DecisionAoiRankMemberShow";
import { DecisionRankList } from "./decisionRank/DecisionRankList";
import { DecisionRankCreate } from "./decisionRank/DecisionRankCreate";
import { DecisionRankEdit } from "./decisionRank/DecisionRankEdit";
import { DecisionRankShow } from "./decisionRank/DecisionRankShow";
import { DecisionRankMemberList } from "./decisionRankMember/DecisionRankMemberList";
import { DecisionRankMemberCreate } from "./decisionRankMember/DecisionRankMemberCreate";
import { DecisionRankMemberEdit } from "./decisionRankMember/DecisionRankMemberEdit";
import { DecisionRankMemberShow } from "./decisionRankMember/DecisionRankMemberShow";
import { DegreeList } from "./degree/DegreeList";
import { DegreeCreate } from "./degree/DegreeCreate";
import { DegreeEdit } from "./degree/DegreeEdit";
import { DegreeShow } from "./degree/DegreeShow";
import { DegreeLevelList } from "./degreeLevel/DegreeLevelList";
import { DegreeLevelCreate } from "./degreeLevel/DegreeLevelCreate";
import { DegreeLevelEdit } from "./degreeLevel/DegreeLevelEdit";
import { DegreeLevelShow } from "./degreeLevel/DegreeLevelShow";
import { DegreesallList } from "./degreesall/DegreesallList";
import { DegreesallCreate } from "./degreesall/DegreesallCreate";
import { DegreesallEdit } from "./degreesall/DegreesallEdit";
import { DegreesallShow } from "./degreesall/DegreesallShow";
import { DepartmentList } from "./department/DepartmentList";
import { DepartmentCreate } from "./department/DepartmentCreate";
import { DepartmentEdit } from "./department/DepartmentEdit";
import { DepartmentShow } from "./department/DepartmentShow";
import { DepartmentEnableRecyclingList } from "./departmentEnableRecycling/DepartmentEnableRecyclingList";
import { DepartmentEnableRecyclingCreate } from "./departmentEnableRecycling/DepartmentEnableRecyclingCreate";
import { DepartmentEnableRecyclingEdit } from "./departmentEnableRecycling/DepartmentEnableRecyclingEdit";
import { DepartmentEnableRecyclingShow } from "./departmentEnableRecycling/DepartmentEnableRecyclingShow";
import { DepartmentReplyperiodList } from "./departmentReplyperiod/DepartmentReplyperiodList";
import { DepartmentReplyperiodCreate } from "./departmentReplyperiod/DepartmentReplyperiodCreate";
import { DepartmentReplyperiodEdit } from "./departmentReplyperiod/DepartmentReplyperiodEdit";
import { DepartmentReplyperiodShow } from "./departmentReplyperiod/DepartmentReplyperiodShow";
import { DepartmentUnitList } from "./departmentUnit/DepartmentUnitList";
import { DepartmentUnitCreate } from "./departmentUnit/DepartmentUnitCreate";
import { DepartmentUnitEdit } from "./departmentUnit/DepartmentUnitEdit";
import { DepartmentUnitShow } from "./departmentUnit/DepartmentUnitShow";
import { DietrichDiversityList } from "./dietrichDiversity/DietrichDiversityList";
import { DietrichDiversityCreate } from "./dietrichDiversity/DietrichDiversityCreate";
import { DietrichDiversityEdit } from "./dietrichDiversity/DietrichDiversityEdit";
import { DietrichDiversityShow } from "./dietrichDiversity/DietrichDiversityShow";
import { DietrichFinancialSupportList } from "./dietrichFinancialSupport/DietrichFinancialSupportList";
import { DietrichFinancialSupportCreate } from "./dietrichFinancialSupport/DietrichFinancialSupportCreate";
import { DietrichFinancialSupportEdit } from "./dietrichFinancialSupport/DietrichFinancialSupportEdit";
import { DietrichFinancialSupportShow } from "./dietrichFinancialSupport/DietrichFinancialSupportShow";
import { DietrichRecognitionList } from "./dietrichRecognition/DietrichRecognitionList";
import { DietrichRecognitionCreate } from "./dietrichRecognition/DietrichRecognitionCreate";
import { DietrichRecognitionEdit } from "./dietrichRecognition/DietrichRecognitionEdit";
import { DietrichRecognitionShow } from "./dietrichRecognition/DietrichRecognitionShow";
import { DietrichSharingList } from "./dietrichSharing/DietrichSharingList";
import { DietrichSharingCreate } from "./dietrichSharing/DietrichSharingCreate";
import { DietrichSharingEdit } from "./dietrichSharing/DietrichSharingEdit";
import { DietrichSharingShow } from "./dietrichSharing/DietrichSharingShow";
import { DisabilityList } from "./disability/DisabilityList";
import { DisabilityCreate } from "./disability/DisabilityCreate";
import { DisabilityEdit } from "./disability/DisabilityEdit";
import { DisabilityShow } from "./disability/DisabilityShow";
import { DisabilityTypeList } from "./disabilityType/DisabilityTypeList";
import { DisabilityTypeCreate } from "./disabilityType/DisabilityTypeCreate";
import { DisabilityTypeEdit } from "./disabilityType/DisabilityTypeEdit";
import { DisabilityTypeShow } from "./disabilityType/DisabilityTypeShow";
import { DomainList } from "./domain/DomainList";
import { DomainCreate } from "./domain/DomainCreate";
import { DomainEdit } from "./domain/DomainEdit";
import { DomainShow } from "./domain/DomainShow";
import { DomainUnitList } from "./domainUnit/DomainUnitList";
import { DomainUnitCreate } from "./domainUnit/DomainUnitCreate";
import { DomainUnitEdit } from "./domainUnit/DomainUnitEdit";
import { DomainUnitShow } from "./domainUnit/DomainUnitShow";
import { DuolingoDatumList } from "./duolingoDatum/DuolingoDatumList";
import { DuolingoDatumCreate } from "./duolingoDatum/DuolingoDatumCreate";
import { DuolingoDatumEdit } from "./duolingoDatum/DuolingoDatumEdit";
import { DuolingoDatumShow } from "./duolingoDatum/DuolingoDatumShow";
import { DuolingoDataCopyList } from "./duolingoDataCopy/DuolingoDataCopyList";
import { DuolingoDataCopyCreate } from "./duolingoDataCopy/DuolingoDataCopyCreate";
import { DuolingoDataCopyEdit } from "./duolingoDataCopy/DuolingoDataCopyEdit";
import { DuolingoDataCopyShow } from "./duolingoDataCopy/DuolingoDataCopyShow";
import { DuolingoscoreList } from "./duolingoscore/DuolingoscoreList";
import { DuolingoscoreCreate } from "./duolingoscore/DuolingoscoreCreate";
import { DuolingoscoreEdit } from "./duolingoscore/DuolingoscoreEdit";
import { DuolingoscoreShow } from "./duolingoscore/DuolingoscoreShow";
import { Em2FinancialSupportList } from "./em2FinancialSupport/Em2FinancialSupportList";
import { Em2FinancialSupportCreate } from "./em2FinancialSupport/Em2FinancialSupportCreate";
import { Em2FinancialSupportEdit } from "./em2FinancialSupport/Em2FinancialSupportEdit";
import { Em2FinancialSupportShow } from "./em2FinancialSupport/Em2FinancialSupportShow";
import { Em2SopList } from "./em2Sop/Em2SopList";
import { Em2SopCreate } from "./em2Sop/Em2SopCreate";
import { Em2SopEdit } from "./em2Sop/Em2SopEdit";
import { Em2SopShow } from "./em2Sop/Em2SopShow";
import { Em2SupportingCourseworkList } from "./em2SupportingCoursework/Em2SupportingCourseworkList";
import { Em2SupportingCourseworkCreate } from "./em2SupportingCoursework/Em2SupportingCourseworkCreate";
import { Em2SupportingCourseworkEdit } from "./em2SupportingCoursework/Em2SupportingCourseworkEdit";
import { Em2SupportingCourseworkShow } from "./em2SupportingCoursework/Em2SupportingCourseworkShow";
import { ErrorlogList } from "./errorlog/ErrorlogList";
import { ErrorlogCreate } from "./errorlog/ErrorlogCreate";
import { ErrorlogEdit } from "./errorlog/ErrorlogEdit";
import { ErrorlogShow } from "./errorlog/ErrorlogShow";
import { EthnicityList } from "./ethnicity/EthnicityList";
import { EthnicityCreate } from "./ethnicity/EthnicityCreate";
import { EthnicityEdit } from "./ethnicity/EthnicityEdit";
import { EthnicityShow } from "./ethnicity/EthnicityShow";
import { EtsConfigList } from "./etsConfig/EtsConfigList";
import { EtsConfigCreate } from "./etsConfig/EtsConfigCreate";
import { EtsConfigEdit } from "./etsConfig/EtsConfigEdit";
import { EtsConfigShow } from "./etsConfig/EtsConfigShow";
import { EtsGreList } from "./etsGre/EtsGreList";
import { EtsGreCreate } from "./etsGre/EtsGreCreate";
import { EtsGreEdit } from "./etsGre/EtsGreEdit";
import { EtsGreShow } from "./etsGre/EtsGreShow";
import { EtsGreCopyList } from "./etsGreCopy/EtsGreCopyList";
import { EtsGreCopyCreate } from "./etsGreCopy/EtsGreCopyCreate";
import { EtsGreCopyEdit } from "./etsGreCopy/EtsGreCopyEdit";
import { EtsGreCopyShow } from "./etsGreCopy/EtsGreCopyShow";
import { EtsToeflScoreList } from "./etsToeflScore/EtsToeflScoreList";
import { EtsToeflScoreCreate } from "./etsToeflScore/EtsToeflScoreCreate";
import { EtsToeflScoreEdit } from "./etsToeflScore/EtsToeflScoreEdit";
import { EtsToeflScoreShow } from "./etsToeflScore/EtsToeflScoreShow";
import { ExceptionAppList } from "./exceptionApp/ExceptionAppList";
import { ExceptionAppCreate } from "./exceptionApp/ExceptionAppCreate";
import { ExceptionAppEdit } from "./exceptionApp/ExceptionAppEdit";
import { ExceptionAppShow } from "./exceptionApp/ExceptionAppShow";
import { ExperienceList } from "./experience/ExperienceList";
import { ExperienceCreate } from "./experience/ExperienceCreate";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceShow } from "./experience/ExperienceShow";
import { FailedMergeList } from "./failedMerge/FailedMergeList";
import { FailedMergeCreate } from "./failedMerge/FailedMergeCreate";
import { FailedMergeEdit } from "./failedMerge/FailedMergeEdit";
import { FailedMergeShow } from "./failedMerge/FailedMergeShow";
import { FellowshipList } from "./fellowship/FellowshipList";
import { FellowshipCreate } from "./fellowship/FellowshipCreate";
import { FellowshipEdit } from "./fellowship/FellowshipEdit";
import { FellowshipShow } from "./fellowship/FellowshipShow";
import { FieldsofstudyList } from "./fieldsofstudy/FieldsofstudyList";
import { FieldsofstudyCreate } from "./fieldsofstudy/FieldsofstudyCreate";
import { FieldsofstudyEdit } from "./fieldsofstudy/FieldsofstudyEdit";
import { FieldsofstudyShow } from "./fieldsofstudy/FieldsofstudyShow";
import { FolderLabelInfoList } from "./folderLabelInfo/FolderLabelInfoList";
import { FolderLabelInfoCreate } from "./folderLabelInfo/FolderLabelInfoCreate";
import { FolderLabelInfoEdit } from "./folderLabelInfo/FolderLabelInfoEdit";
import { FolderLabelInfoShow } from "./folderLabelInfo/FolderLabelInfoShow";
import { GenderList } from "./gender/GenderList";
import { GenderCreate } from "./gender/GenderCreate";
import { GenderEdit } from "./gender/GenderEdit";
import { GenderShow } from "./gender/GenderShow";
import { GmatscoreList } from "./gmatscore/GmatscoreList";
import { GmatscoreCreate } from "./gmatscore/GmatscoreCreate";
import { GmatscoreEdit } from "./gmatscore/GmatscoreEdit";
import { GmatscoreShow } from "./gmatscore/GmatscoreShow";
import { GpascaleList } from "./gpascale/GpascaleList";
import { GpascaleCreate } from "./gpascale/GpascaleCreate";
import { GpascaleEdit } from "./gpascale/GpascaleEdit";
import { GpascaleShow } from "./gpascale/GpascaleShow";
import { GrescoreList } from "./grescore/GrescoreList";
import { GrescoreCreate } from "./grescore/GrescoreCreate";
import { GrescoreEdit } from "./grescore/GrescoreEdit";
import { GrescoreShow } from "./grescore/GrescoreShow";
import { GrescoreMscsWaiverList } from "./grescoreMscsWaiver/GrescoreMscsWaiverList";
import { GrescoreMscsWaiverCreate } from "./grescoreMscsWaiver/GrescoreMscsWaiverCreate";
import { GrescoreMscsWaiverEdit } from "./grescoreMscsWaiver/GrescoreMscsWaiverEdit";
import { GrescoreMscsWaiverShow } from "./grescoreMscsWaiver/GrescoreMscsWaiverShow";
import { GresubjectscoreList } from "./gresubjectscore/GresubjectscoreList";
import { GresubjectscoreCreate } from "./gresubjectscore/GresubjectscoreCreate";
import { GresubjectscoreEdit } from "./gresubjectscore/GresubjectscoreEdit";
import { GresubjectscoreShow } from "./gresubjectscore/GresubjectscoreShow";
import { GroupRankList } from "./groupRank/GroupRankList";
import { GroupRankCreate } from "./groupRank/GroupRankCreate";
import { GroupRankEdit } from "./groupRank/GroupRankEdit";
import { GroupRankShow } from "./groupRank/GroupRankShow";
import { GroupRankCommentList } from "./groupRankComment/GroupRankCommentList";
import { GroupRankCommentCreate } from "./groupRankComment/GroupRankCommentCreate";
import { GroupRankCommentEdit } from "./groupRankComment/GroupRankCommentEdit";
import { GroupRankCommentShow } from "./groupRankComment/GroupRankCommentShow";
import { GroupRankMemberList } from "./groupRankMember/GroupRankMemberList";
import { GroupRankMemberCreate } from "./groupRankMember/GroupRankMemberCreate";
import { GroupRankMemberEdit } from "./groupRankMember/GroupRankMemberEdit";
import { GroupRankMemberShow } from "./groupRankMember/GroupRankMemberShow";
import { HighschoolList } from "./highschool/HighschoolList";
import { HighschoolCreate } from "./highschool/HighschoolCreate";
import { HighschoolEdit } from "./highschool/HighschoolEdit";
import { HighschoolShow } from "./highschool/HighschoolShow";
import { IeltsscoreList } from "./ieltsscore/IeltsscoreList";
import { IeltsscoreCreate } from "./ieltsscore/IeltsscoreCreate";
import { IeltsscoreEdit } from "./ieltsscore/IeltsscoreEdit";
import { IeltsscoreShow } from "./ieltsscore/IeltsscoreShow";
import { IniDisciplinaryActionList } from "./iniDisciplinaryAction/IniDisciplinaryActionList";
import { IniDisciplinaryActionCreate } from "./iniDisciplinaryAction/IniDisciplinaryActionCreate";
import { IniDisciplinaryActionEdit } from "./iniDisciplinaryAction/IniDisciplinaryActionEdit";
import { IniDisciplinaryActionShow } from "./iniDisciplinaryAction/IniDisciplinaryActionShow";
import { IniFinancialSupportList } from "./iniFinancialSupport/IniFinancialSupportList";
import { IniFinancialSupportCreate } from "./iniFinancialSupport/IniFinancialSupportCreate";
import { IniFinancialSupportEdit } from "./iniFinancialSupport/IniFinancialSupportEdit";
import { IniFinancialSupportShow } from "./iniFinancialSupport/IniFinancialSupportShow";
import { IniSopList } from "./iniSop/IniSopList";
import { IniSopCreate } from "./iniSop/IniSopCreate";
import { IniSopEdit } from "./iniSop/IniSopEdit";
import { IniSopShow } from "./iniSop/IniSopShow";
import { IniSupportingCourseworkList } from "./iniSupportingCoursework/IniSupportingCourseworkList";
import { IniSupportingCourseworkCreate } from "./iniSupportingCoursework/IniSupportingCourseworkCreate";
import { IniSupportingCourseworkEdit } from "./iniSupportingCoursework/IniSupportingCourseworkEdit";
import { IniSupportingCourseworkShow } from "./iniSupportingCoursework/IniSupportingCourseworkShow";
import { IniSupportingCourseworkKobeList } from "./iniSupportingCourseworkKobe/IniSupportingCourseworkKobeList";
import { IniSupportingCourseworkKobeCreate } from "./iniSupportingCourseworkKobe/IniSupportingCourseworkKobeCreate";
import { IniSupportingCourseworkKobeEdit } from "./iniSupportingCourseworkKobe/IniSupportingCourseworkKobeEdit";
import { IniSupportingCourseworkKobeShow } from "./iniSupportingCourseworkKobe/IniSupportingCourseworkKobeShow";
import { IniYearsExperienceList } from "./iniYearsExperience/IniYearsExperienceList";
import { IniYearsExperienceCreate } from "./iniYearsExperience/IniYearsExperienceCreate";
import { IniYearsExperienceEdit } from "./iniYearsExperience/IniYearsExperienceEdit";
import { IniYearsExperienceShow } from "./iniYearsExperience/IniYearsExperienceShow";
import { InstituteList } from "./institute/InstituteList";
import { InstituteCreate } from "./institute/InstituteCreate";
import { InstituteEdit } from "./institute/InstituteEdit";
import { InstituteShow } from "./institute/InstituteShow";
import { InterestList } from "./interest/InterestList";
import { InterestCreate } from "./interest/InterestCreate";
import { InterestEdit } from "./interest/InterestEdit";
import { InterestShow } from "./interest/InterestShow";
import { IpedsEthnicityList } from "./ipedsEthnicity/IpedsEthnicityList";
import { IpedsEthnicityCreate } from "./ipedsEthnicity/IpedsEthnicityCreate";
import { IpedsEthnicityEdit } from "./ipedsEthnicity/IpedsEthnicityEdit";
import { IpedsEthnicityShow } from "./ipedsEthnicity/IpedsEthnicityShow";
import { IpedsRaceList } from "./ipedsRace/IpedsRaceList";
import { IpedsRaceCreate } from "./ipedsRace/IpedsRaceCreate";
import { IpedsRaceEdit } from "./ipedsRace/IpedsRaceEdit";
import { IpedsRaceShow } from "./ipedsRace/IpedsRaceShow";
import { JiraIssueList } from "./jiraIssue/JiraIssueList";
import { JiraIssueCreate } from "./jiraIssue/JiraIssueCreate";
import { JiraIssueEdit } from "./jiraIssue/JiraIssueEdit";
import { JiraIssueShow } from "./jiraIssue/JiraIssueShow";
import { JiravoteList } from "./jiravote/JiravoteList";
import { JiravoteCreate } from "./jiravote/JiravoteCreate";
import { JiravoteEdit } from "./jiravote/JiravoteEdit";
import { JiravoteShow } from "./jiravote/JiravoteShow";
import { LangProfRecommendList } from "./langProfRecommend/LangProfRecommendList";
import { LangProfRecommendCreate } from "./langProfRecommend/LangProfRecommendCreate";
import { LangProfRecommendEdit } from "./langProfRecommend/LangProfRecommendEdit";
import { LangProfRecommendShow } from "./langProfRecommend/LangProfRecommendShow";
import { LangProfRecommenderInfoList } from "./langProfRecommenderInfo/LangProfRecommenderInfoList";
import { LangProfRecommenderInfoCreate } from "./langProfRecommenderInfo/LangProfRecommenderInfoCreate";
import { LangProfRecommenderInfoEdit } from "./langProfRecommenderInfo/LangProfRecommenderInfoEdit";
import { LangProfRecommenderInfoShow } from "./langProfRecommenderInfo/LangProfRecommenderInfoShow";
import { LanguageAssessmentList } from "./languageAssessment/LanguageAssessmentList";
import { LanguageAssessmentCreate } from "./languageAssessment/LanguageAssessmentCreate";
import { LanguageAssessmentEdit } from "./languageAssessment/LanguageAssessmentEdit";
import { LanguageAssessmentShow } from "./languageAssessment/LanguageAssessmentShow";
import { LanguageAssessmentRatingList } from "./languageAssessmentRating/LanguageAssessmentRatingList";
import { LanguageAssessmentRatingCreate } from "./languageAssessmentRating/LanguageAssessmentRatingCreate";
import { LanguageAssessmentRatingEdit } from "./languageAssessmentRating/LanguageAssessmentRatingEdit";
import { LanguageAssessmentRatingShow } from "./languageAssessmentRating/LanguageAssessmentRatingShow";
import { LanguageAssessmentStudyLevelList } from "./languageAssessmentStudyLevel/LanguageAssessmentStudyLevelList";
import { LanguageAssessmentStudyLevelCreate } from "./languageAssessmentStudyLevel/LanguageAssessmentStudyLevelCreate";
import { LanguageAssessmentStudyLevelEdit } from "./languageAssessmentStudyLevel/LanguageAssessmentStudyLevelEdit";
import { LanguageAssessmentStudyLevelShow } from "./languageAssessmentStudyLevel/LanguageAssessmentStudyLevelShow";
import { LegacyEthnicityList } from "./legacyEthnicity/LegacyEthnicityList";
import { LegacyEthnicityCreate } from "./legacyEthnicity/LegacyEthnicityCreate";
import { LegacyEthnicityEdit } from "./legacyEthnicity/LegacyEthnicityEdit";
import { LegacyEthnicityShow } from "./legacyEthnicity/LegacyEthnicityShow";
import { LtiMastersAdmitList } from "./ltiMastersAdmit/LtiMastersAdmitList";
import { LtiMastersAdmitCreate } from "./ltiMastersAdmit/LtiMastersAdmitCreate";
import { LtiMastersAdmitEdit } from "./ltiMastersAdmit/LtiMastersAdmitEdit";
import { LtiMastersAdmitShow } from "./ltiMastersAdmit/LtiMastersAdmitShow";
import { LuApplicationAdvisorList } from "./luApplicationAdvisor/LuApplicationAdvisorList";
import { LuApplicationAdvisorCreate } from "./luApplicationAdvisor/LuApplicationAdvisorCreate";
import { LuApplicationAdvisorEdit } from "./luApplicationAdvisor/LuApplicationAdvisorEdit";
import { LuApplicationAdvisorShow } from "./luApplicationAdvisor/LuApplicationAdvisorShow";
import { LuApplicationAppreqList } from "./luApplicationAppreq/LuApplicationAppreqList";
import { LuApplicationAppreqCreate } from "./luApplicationAppreq/LuApplicationAppreqCreate";
import { LuApplicationAppreqEdit } from "./luApplicationAppreq/LuApplicationAppreqEdit";
import { LuApplicationAppreqShow } from "./luApplicationAppreq/LuApplicationAppreqShow";
import { LuApplicationCohortList } from "./luApplicationCohort/LuApplicationCohortList";
import { LuApplicationCohortCreate } from "./luApplicationCohort/LuApplicationCohortCreate";
import { LuApplicationCohortEdit } from "./luApplicationCohort/LuApplicationCohortEdit";
import { LuApplicationCohortShow } from "./luApplicationCohort/LuApplicationCohortShow";
import { LuApplicationEtsgreList } from "./luApplicationEtsgre/LuApplicationEtsgreList";
import { LuApplicationEtsgreCreate } from "./luApplicationEtsgre/LuApplicationEtsgreCreate";
import { LuApplicationEtsgreEdit } from "./luApplicationEtsgre/LuApplicationEtsgreEdit";
import { LuApplicationEtsgreShow } from "./luApplicationEtsgre/LuApplicationEtsgreShow";
import { LuApplicationGroupList } from "./luApplicationGroup/LuApplicationGroupList";
import { LuApplicationGroupCreate } from "./luApplicationGroup/LuApplicationGroupCreate";
import { LuApplicationGroupEdit } from "./luApplicationGroup/LuApplicationGroupEdit";
import { LuApplicationGroupShow } from "./luApplicationGroup/LuApplicationGroupShow";
import { LuApplicationInterestList } from "./luApplicationInterest/LuApplicationInterestList";
import { LuApplicationInterestCreate } from "./luApplicationInterest/LuApplicationInterestCreate";
import { LuApplicationInterestEdit } from "./luApplicationInterest/LuApplicationInterestEdit";
import { LuApplicationInterestShow } from "./luApplicationInterest/LuApplicationInterestShow";
import { LuApplicationProgramList } from "./luApplicationProgram/LuApplicationProgramList";
import { LuApplicationProgramCreate } from "./luApplicationProgram/LuApplicationProgramCreate";
import { LuApplicationProgramEdit } from "./luApplicationProgram/LuApplicationProgramEdit";
import { LuApplicationProgramShow } from "./luApplicationProgram/LuApplicationProgramShow";
import { LuApplicationProgramsHistoryList } from "./luApplicationProgramsHistory/LuApplicationProgramsHistoryList";
import { LuApplicationProgramsHistoryCreate } from "./luApplicationProgramsHistory/LuApplicationProgramsHistoryCreate";
import { LuApplicationProgramsHistoryEdit } from "./luApplicationProgramsHistory/LuApplicationProgramsHistoryEdit";
import { LuApplicationProgramsHistoryShow } from "./luApplicationProgramsHistory/LuApplicationProgramsHistoryShow";
import { LuApplicationStartSemesterList } from "./luApplicationStartSemester/LuApplicationStartSemesterList";
import { LuApplicationStartSemesterCreate } from "./luApplicationStartSemester/LuApplicationStartSemesterCreate";
import { LuApplicationStartSemesterEdit } from "./luApplicationStartSemester/LuApplicationStartSemesterEdit";
import { LuApplicationStartSemesterShow } from "./luApplicationStartSemester/LuApplicationStartSemesterShow";
import { LuDegreesApplicationreqList } from "./luDegreesApplicationreq/LuDegreesApplicationreqList";
import { LuDegreesApplicationreqCreate } from "./luDegreesApplicationreq/LuDegreesApplicationreqCreate";
import { LuDegreesApplicationreqEdit } from "./luDegreesApplicationreq/LuDegreesApplicationreqEdit";
import { LuDegreesApplicationreqShow } from "./luDegreesApplicationreq/LuDegreesApplicationreqShow";
import { LuDomainDepartmentList } from "./luDomainDepartment/LuDomainDepartmentList";
import { LuDomainDepartmentCreate } from "./luDomainDepartment/LuDomainDepartmentCreate";
import { LuDomainDepartmentEdit } from "./luDomainDepartment/LuDomainDepartmentEdit";
import { LuDomainDepartmentShow } from "./luDomainDepartment/LuDomainDepartmentShow";
import { LuProgramsApplicationreqList } from "./luProgramsApplicationreq/LuProgramsApplicationreqList";
import { LuProgramsApplicationreqCreate } from "./luProgramsApplicationreq/LuProgramsApplicationreqCreate";
import { LuProgramsApplicationreqEdit } from "./luProgramsApplicationreq/LuProgramsApplicationreqEdit";
import { LuProgramsApplicationreqShow } from "./luProgramsApplicationreq/LuProgramsApplicationreqShow";
import { LuProgramsDepartmentList } from "./luProgramsDepartment/LuProgramsDepartmentList";
import { LuProgramsDepartmentCreate } from "./luProgramsDepartment/LuProgramsDepartmentCreate";
import { LuProgramsDepartmentEdit } from "./luProgramsDepartment/LuProgramsDepartmentEdit";
import { LuProgramsDepartmentShow } from "./luProgramsDepartment/LuProgramsDepartmentShow";
import { LuProgramsInterestList } from "./luProgramsInterest/LuProgramsInterestList";
import { LuProgramsInterestCreate } from "./luProgramsInterest/LuProgramsInterestCreate";
import { LuProgramsInterestEdit } from "./luProgramsInterest/LuProgramsInterestEdit";
import { LuProgramsInterestShow } from "./luProgramsInterest/LuProgramsInterestShow";
import { LuProgramsRecommendationList } from "./luProgramsRecommendation/LuProgramsRecommendationList";
import { LuProgramsRecommendationCreate } from "./luProgramsRecommendation/LuProgramsRecommendationCreate";
import { LuProgramsRecommendationEdit } from "./luProgramsRecommendation/LuProgramsRecommendationEdit";
import { LuProgramsRecommendationShow } from "./luProgramsRecommendation/LuProgramsRecommendationShow";
import { LuReviewInterestList } from "./luReviewInterest/LuReviewInterestList";
import { LuReviewInterestCreate } from "./luReviewInterest/LuReviewInterestCreate";
import { LuReviewInterestEdit } from "./luReviewInterest/LuReviewInterestEdit";
import { LuReviewInterestShow } from "./luReviewInterest/LuReviewInterestShow";
import { LuReviewerGroupList } from "./luReviewerGroup/LuReviewerGroupList";
import { LuReviewerGroupCreate } from "./luReviewerGroup/LuReviewerGroupCreate";
import { LuReviewerGroupEdit } from "./luReviewerGroup/LuReviewerGroupEdit";
import { LuReviewerGroupShow } from "./luReviewerGroup/LuReviewerGroupShow";
import { LuUserDepartmentList } from "./luUserDepartment/LuUserDepartmentList";
import { LuUserDepartmentCreate } from "./luUserDepartment/LuUserDepartmentCreate";
import { LuUserDepartmentEdit } from "./luUserDepartment/LuUserDepartmentEdit";
import { LuUserDepartmentShow } from "./luUserDepartment/LuUserDepartmentShow";
import { LuUsersUsertypeList } from "./luUsersUsertype/LuUsersUsertypeList";
import { LuUsersUsertypeCreate } from "./luUsersUsertype/LuUsersUsertypeCreate";
import { LuUsersUsertypeEdit } from "./luUsersUsertype/LuUsersUsertypeEdit";
import { LuUsersUsertypeShow } from "./luUsersUsertype/LuUsersUsertypeShow";
import { LuUsersUsertypesHistoryList } from "./luUsersUsertypesHistory/LuUsersUsertypesHistoryList";
import { LuUsersUsertypesHistoryCreate } from "./luUsersUsertypesHistory/LuUsersUsertypesHistoryCreate";
import { LuUsersUsertypesHistoryEdit } from "./luUsersUsertypesHistory/LuUsersUsertypesHistoryEdit";
import { LuUsersUsertypesHistoryShow } from "./luUsersUsertypesHistory/LuUsersUsertypesHistoryShow";
import { LuUsersUsertypesOrigList } from "./luUsersUsertypesOrig/LuUsersUsertypesOrigList";
import { LuUsersUsertypesOrigCreate } from "./luUsersUsertypesOrig/LuUsersUsertypesOrigCreate";
import { LuUsersUsertypesOrigEdit } from "./luUsersUsertypesOrig/LuUsersUsertypesOrigEdit";
import { LuUsersUsertypesOrigShow } from "./luUsersUsertypesOrig/LuUsersUsertypesOrigShow";
import { MergeList } from "./merge/MergeList";
import { MergeCreate } from "./merge/MergeCreate";
import { MergeEdit } from "./merge/MergeEdit";
import { MergeShow } from "./merge/MergeShow";
import { MergeApplicationList } from "./mergeApplication/MergeApplicationList";
import { MergeApplicationCreate } from "./mergeApplication/MergeApplicationCreate";
import { MergeApplicationEdit } from "./mergeApplication/MergeApplicationEdit";
import { MergeApplicationShow } from "./mergeApplication/MergeApplicationShow";
import { MergeDatafileList } from "./mergeDatafile/MergeDatafileList";
import { MergeDatafileCreate } from "./mergeDatafile/MergeDatafileCreate";
import { MergeDatafileEdit } from "./mergeDatafile/MergeDatafileEdit";
import { MergeDatafileShow } from "./mergeDatafile/MergeDatafileShow";
import { MhciPrereqList } from "./mhciPrereq/MhciPrereqList";
import { MhciPrereqCreate } from "./mhciPrereq/MhciPrereqCreate";
import { MhciPrereqEdit } from "./mhciPrereq/MhciPrereqEdit";
import { MhciPrereqShow } from "./mhciPrereq/MhciPrereqShow";
import { MhciPrereqsConversationCommentList } from "./mhciPrereqsConversationComment/MhciPrereqsConversationCommentList";
import { MhciPrereqsConversationCommentCreate } from "./mhciPrereqsConversationComment/MhciPrereqsConversationCommentCreate";
import { MhciPrereqsConversationCommentEdit } from "./mhciPrereqsConversationComment/MhciPrereqsConversationCommentEdit";
import { MhciPrereqsConversationCommentShow } from "./mhciPrereqsConversationComment/MhciPrereqsConversationCommentShow";
import { MhciPrereqsCourseDatafileList } from "./mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileList";
import { MhciPrereqsCourseDatafileCreate } from "./mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileCreate";
import { MhciPrereqsCourseDatafileEdit } from "./mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileEdit";
import { MhciPrereqsCourseDatafileShow } from "./mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafileShow";
import { MhciPrereqsCourseList } from "./mhciPrereqsCourse/MhciPrereqsCourseList";
import { MhciPrereqsCourseCreate } from "./mhciPrereqsCourse/MhciPrereqsCourseCreate";
import { MhciPrereqsCourseEdit } from "./mhciPrereqsCourse/MhciPrereqsCourseEdit";
import { MhciPrereqsCourseShow } from "./mhciPrereqsCourse/MhciPrereqsCourseShow";
import { MhciPrereqsDesignPortfolioList } from "./mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioList";
import { MhciPrereqsDesignPortfolioCreate } from "./mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioCreate";
import { MhciPrereqsDesignPortfolioEdit } from "./mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioEdit";
import { MhciPrereqsDesignPortfolioShow } from "./mhciPrereqsDesignPortfolio/MhciPrereqsDesignPortfolioShow";
import { MhciPrereqsProgrammingSampleList } from "./mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleList";
import { MhciPrereqsProgrammingSampleCreate } from "./mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleCreate";
import { MhciPrereqsProgrammingSampleEdit } from "./mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleEdit";
import { MhciPrereqsProgrammingSampleShow } from "./mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleShow";
import { MhciPrereqsProgrammingTestList } from "./mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestList";
import { MhciPrereqsProgrammingTestCreate } from "./mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestCreate";
import { MhciPrereqsProgrammingTestEdit } from "./mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestEdit";
import { MhciPrereqsProgrammingTestShow } from "./mhciPrereqsProgrammingTest/MhciPrereqsProgrammingTestShow";
import { MhciPrereqsReferenceList } from "./mhciPrereqsReference/MhciPrereqsReferenceList";
import { MhciPrereqsReferenceCreate } from "./mhciPrereqsReference/MhciPrereqsReferenceCreate";
import { MhciPrereqsReferenceEdit } from "./mhciPrereqsReference/MhciPrereqsReferenceEdit";
import { MhciPrereqsReferenceShow } from "./mhciPrereqsReference/MhciPrereqsReferenceShow";
import { MhciPrereqsReviewerList } from "./mhciPrereqsReviewer/MhciPrereqsReviewerList";
import { MhciPrereqsReviewerCreate } from "./mhciPrereqsReviewer/MhciPrereqsReviewerCreate";
import { MhciPrereqsReviewerEdit } from "./mhciPrereqsReviewer/MhciPrereqsReviewerEdit";
import { MhciPrereqsReviewerShow } from "./mhciPrereqsReviewer/MhciPrereqsReviewerShow";
import { MhciPrereqsStatusList } from "./mhciPrereqsStatus/MhciPrereqsStatusList";
import { MhciPrereqsStatusCreate } from "./mhciPrereqsStatus/MhciPrereqsStatusCreate";
import { MhciPrereqsStatusEdit } from "./mhciPrereqsStatus/MhciPrereqsStatusEdit";
import { MhciPrereqsStatusShow } from "./mhciPrereqsStatus/MhciPrereqsStatusShow";
import { MhciSlateAppSchoolList } from "./mhciSlateAppSchool/MhciSlateAppSchoolList";
import { MhciSlateAppSchoolCreate } from "./mhciSlateAppSchool/MhciSlateAppSchoolCreate";
import { MhciSlateAppSchoolEdit } from "./mhciSlateAppSchool/MhciSlateAppSchoolEdit";
import { MhciSlateAppSchoolShow } from "./mhciSlateAppSchool/MhciSlateAppSchoolShow";
import { MhciSlateAppList } from "./mhciSlateApp/MhciSlateAppList";
import { MhciSlateAppCreate } from "./mhciSlateApp/MhciSlateAppCreate";
import { MhciSlateAppEdit } from "./mhciSlateApp/MhciSlateAppEdit";
import { MhciSlateAppShow } from "./mhciSlateApp/MhciSlateAppShow";
import { MhciSlateGreList } from "./mhciSlateGre/MhciSlateGreList";
import { MhciSlateGreCreate } from "./mhciSlateGre/MhciSlateGreCreate";
import { MhciSlateGreEdit } from "./mhciSlateGre/MhciSlateGreEdit";
import { MhciSlateGreShow } from "./mhciSlateGre/MhciSlateGreShow";
import { MhciSlateIeltList } from "./mhciSlateIelt/MhciSlateIeltList";
import { MhciSlateIeltCreate } from "./mhciSlateIelt/MhciSlateIeltCreate";
import { MhciSlateIeltEdit } from "./mhciSlateIelt/MhciSlateIeltEdit";
import { MhciSlateIeltShow } from "./mhciSlateIelt/MhciSlateIeltShow";
import { MhciSlatePubList } from "./mhciSlatePub/MhciSlatePubList";
import { MhciSlatePubCreate } from "./mhciSlatePub/MhciSlatePubCreate";
import { MhciSlatePubEdit } from "./mhciSlatePub/MhciSlatePubEdit";
import { MhciSlatePubShow } from "./mhciSlatePub/MhciSlatePubShow";
import { MhciSlateToeflList } from "./mhciSlateToefl/MhciSlateToeflList";
import { MhciSlateToeflCreate } from "./mhciSlateToefl/MhciSlateToeflCreate";
import { MhciSlateToeflEdit } from "./mhciSlateToefl/MhciSlateToeflEdit";
import { MhciSlateToeflShow } from "./mhciSlateToefl/MhciSlateToeflShow";
import { MitsSlateAppSchoolList } from "./mitsSlateAppSchool/MitsSlateAppSchoolList";
import { MitsSlateAppSchoolCreate } from "./mitsSlateAppSchool/MitsSlateAppSchoolCreate";
import { MitsSlateAppSchoolEdit } from "./mitsSlateAppSchool/MitsSlateAppSchoolEdit";
import { MitsSlateAppSchoolShow } from "./mitsSlateAppSchool/MitsSlateAppSchoolShow";
import { MitsSlateAppList } from "./mitsSlateApp/MitsSlateAppList";
import { MitsSlateAppCreate } from "./mitsSlateApp/MitsSlateAppCreate";
import { MitsSlateAppEdit } from "./mitsSlateApp/MitsSlateAppEdit";
import { MitsSlateAppShow } from "./mitsSlateApp/MitsSlateAppShow";
import { MitsSlateAppsMseReviewedList } from "./mitsSlateAppsMseReviewed/MitsSlateAppsMseReviewedList";
import { MitsSlateAppsMseReviewedCreate } from "./mitsSlateAppsMseReviewed/MitsSlateAppsMseReviewedCreate";
import { MitsSlateAppsMseReviewedEdit } from "./mitsSlateAppsMseReviewed/MitsSlateAppsMseReviewedEdit";
import { MitsSlateAppsMseReviewedShow } from "./mitsSlateAppsMseReviewed/MitsSlateAppsMseReviewedShow";
import { MitsSlateCodilityList } from "./mitsSlateCodility/MitsSlateCodilityList";
import { MitsSlateCodilityCreate } from "./mitsSlateCodility/MitsSlateCodilityCreate";
import { MitsSlateCodilityEdit } from "./mitsSlateCodility/MitsSlateCodilityEdit";
import { MitsSlateCodilityShow } from "./mitsSlateCodility/MitsSlateCodilityShow";
import { MitsSlateEmployList } from "./mitsSlateEmploy/MitsSlateEmployList";
import { MitsSlateEmployCreate } from "./mitsSlateEmploy/MitsSlateEmployCreate";
import { MitsSlateEmployEdit } from "./mitsSlateEmploy/MitsSlateEmployEdit";
import { MitsSlateEmployShow } from "./mitsSlateEmploy/MitsSlateEmployShow";
import { MitsSlateGreList } from "./mitsSlateGre/MitsSlateGreList";
import { MitsSlateGreCreate } from "./mitsSlateGre/MitsSlateGreCreate";
import { MitsSlateGreEdit } from "./mitsSlateGre/MitsSlateGreEdit";
import { MitsSlateGreShow } from "./mitsSlateGre/MitsSlateGreShow";
import { MitsSlateIeltList } from "./mitsSlateIelt/MitsSlateIeltList";
import { MitsSlateIeltCreate } from "./mitsSlateIelt/MitsSlateIeltCreate";
import { MitsSlateIeltEdit } from "./mitsSlateIelt/MitsSlateIeltEdit";
import { MitsSlateIeltShow } from "./mitsSlateIelt/MitsSlateIeltShow";
import { MitsSlatePubList } from "./mitsSlatePub/MitsSlatePubList";
import { MitsSlatePubCreate } from "./mitsSlatePub/MitsSlatePubCreate";
import { MitsSlatePubEdit } from "./mitsSlatePub/MitsSlatePubEdit";
import { MitsSlatePubShow } from "./mitsSlatePub/MitsSlatePubShow";
import { MitsSlateRecommendList } from "./mitsSlateRecommend/MitsSlateRecommendList";
import { MitsSlateRecommendCreate } from "./mitsSlateRecommend/MitsSlateRecommendCreate";
import { MitsSlateRecommendEdit } from "./mitsSlateRecommend/MitsSlateRecommendEdit";
import { MitsSlateRecommendShow } from "./mitsSlateRecommend/MitsSlateRecommendShow";
import { MitsSlateRecommend1List } from "./mitsSlateRecommend1/MitsSlateRecommend1List";
import { MitsSlateRecommend1Create } from "./mitsSlateRecommend1/MitsSlateRecommend1Create";
import { MitsSlateRecommend1Edit } from "./mitsSlateRecommend1/MitsSlateRecommend1Edit";
import { MitsSlateRecommend1Show } from "./mitsSlateRecommend1/MitsSlateRecommend1Show";
import { MitsSlateRecommend2List } from "./mitsSlateRecommend2/MitsSlateRecommend2List";
import { MitsSlateRecommend2Create } from "./mitsSlateRecommend2/MitsSlateRecommend2Create";
import { MitsSlateRecommend2Edit } from "./mitsSlateRecommend2/MitsSlateRecommend2Edit";
import { MitsSlateRecommend2Show } from "./mitsSlateRecommend2/MitsSlateRecommend2Show";
import { MitsSlateRecommend3List } from "./mitsSlateRecommend3/MitsSlateRecommend3List";
import { MitsSlateRecommend3Create } from "./mitsSlateRecommend3/MitsSlateRecommend3Create";
import { MitsSlateRecommend3Edit } from "./mitsSlateRecommend3/MitsSlateRecommend3Edit";
import { MitsSlateRecommend3Show } from "./mitsSlateRecommend3/MitsSlateRecommend3Show";
import { MitsSlateReviewList } from "./mitsSlateReview/MitsSlateReviewList";
import { MitsSlateReviewCreate } from "./mitsSlateReview/MitsSlateReviewCreate";
import { MitsSlateReviewEdit } from "./mitsSlateReview/MitsSlateReviewEdit";
import { MitsSlateReviewShow } from "./mitsSlateReview/MitsSlateReviewShow";
import { MitsSlateSuppinfoList } from "./mitsSlateSuppinfo/MitsSlateSuppinfoList";
import { MitsSlateSuppinfoCreate } from "./mitsSlateSuppinfo/MitsSlateSuppinfoCreate";
import { MitsSlateSuppinfoEdit } from "./mitsSlateSuppinfo/MitsSlateSuppinfoEdit";
import { MitsSlateSuppinfoShow } from "./mitsSlateSuppinfo/MitsSlateSuppinfoShow";
import { MitsSlateToeflList } from "./mitsSlateToefl/MitsSlateToeflList";
import { MitsSlateToeflCreate } from "./mitsSlateToefl/MitsSlateToeflCreate";
import { MitsSlateToeflEdit } from "./mitsSlateToefl/MitsSlateToeflEdit";
import { MitsSlateToeflShow } from "./mitsSlateToefl/MitsSlateToeflShow";
import { MlAreaList } from "./mlArea/MlAreaList";
import { MlAreaCreate } from "./mlArea/MlAreaCreate";
import { MlAreaEdit } from "./mlArea/MlAreaEdit";
import { MlAreaShow } from "./mlArea/MlAreaShow";
import { MlSupportingCourseworkList } from "./mlSupportingCoursework/MlSupportingCourseworkList";
import { MlSupportingCourseworkCreate } from "./mlSupportingCoursework/MlSupportingCourseworkCreate";
import { MlSupportingCourseworkEdit } from "./mlSupportingCoursework/MlSupportingCourseworkEdit";
import { MlSupportingCourseworkShow } from "./mlSupportingCoursework/MlSupportingCourseworkShow";
import { MseAqaList } from "./mseAqa/MseAqaList";
import { MseAqaCreate } from "./mseAqa/MseAqaCreate";
import { MseAqaEdit } from "./mseAqa/MseAqaEdit";
import { MseAqaShow } from "./mseAqa/MseAqaShow";
import { MseBridgeCourseList } from "./mseBridgeCourse/MseBridgeCourseList";
import { MseBridgeCourseCreate } from "./mseBridgeCourse/MseBridgeCourseCreate";
import { MseBridgeCourseEdit } from "./mseBridgeCourse/MseBridgeCourseEdit";
import { MseBridgeCourseShow } from "./mseBridgeCourse/MseBridgeCourseShow";
import { MseBridgeCourseDecisionList } from "./mseBridgeCourseDecision/MseBridgeCourseDecisionList";
import { MseBridgeCourseDecisionCreate } from "./mseBridgeCourseDecision/MseBridgeCourseDecisionCreate";
import { MseBridgeCourseDecisionEdit } from "./mseBridgeCourseDecision/MseBridgeCourseDecisionEdit";
import { MseBridgeCourseDecisionShow } from "./mseBridgeCourseDecision/MseBridgeCourseDecisionShow";
import { MseCodilityList } from "./mseCodility/MseCodilityList";
import { MseCodilityCreate } from "./mseCodility/MseCodilityCreate";
import { MseCodilityEdit } from "./mseCodility/MseCodilityEdit";
import { MseCodilityShow } from "./mseCodility/MseCodilityShow";
import { MseInterviewList } from "./mseInterview/MseInterviewList";
import { MseInterviewCreate } from "./mseInterview/MseInterviewCreate";
import { MseInterviewEdit } from "./mseInterview/MseInterviewEdit";
import { MseInterviewShow } from "./mseInterview/MseInterviewShow";
import { MseLetterRecList } from "./mseLetterRec/MseLetterRecList";
import { MseLetterRecCreate } from "./mseLetterRec/MseLetterRecCreate";
import { MseLetterRecEdit } from "./mseLetterRec/MseLetterRecEdit";
import { MseLetterRecShow } from "./mseLetterRec/MseLetterRecShow";
import { MseLetterRecsDecisionList } from "./mseLetterRecsDecision/MseLetterRecsDecisionList";
import { MseLetterRecsDecisionCreate } from "./mseLetterRecsDecision/MseLetterRecsDecisionCreate";
import { MseLetterRecsDecisionEdit } from "./mseLetterRecsDecision/MseLetterRecsDecisionEdit";
import { MseLetterRecsDecisionShow } from "./mseLetterRecsDecision/MseLetterRecsDecisionShow";
import { MseRiskFactorList } from "./mseRiskFactor/MseRiskFactorList";
import { MseRiskFactorCreate } from "./mseRiskFactor/MseRiskFactorCreate";
import { MseRiskFactorEdit } from "./mseRiskFactor/MseRiskFactorEdit";
import { MseRiskFactorShow } from "./mseRiskFactor/MseRiskFactorShow";
import { MseRiskFactorsDecisionList } from "./mseRiskFactorsDecision/MseRiskFactorsDecisionList";
import { MseRiskFactorsDecisionCreate } from "./mseRiskFactorsDecision/MseRiskFactorsDecisionCreate";
import { MseRiskFactorsDecisionEdit } from "./mseRiskFactorsDecision/MseRiskFactorsDecisionEdit";
import { MseRiskFactorsDecisionShow } from "./mseRiskFactorsDecision/MseRiskFactorsDecisionShow";
import { MseSupportingCourseworkList } from "./mseSupportingCoursework/MseSupportingCourseworkList";
import { MseSupportingCourseworkCreate } from "./mseSupportingCoursework/MseSupportingCourseworkCreate";
import { MseSupportingCourseworkEdit } from "./mseSupportingCoursework/MseSupportingCourseworkEdit";
import { MseSupportingCourseworkShow } from "./mseSupportingCoursework/MseSupportingCourseworkShow";
import { MultiprogramlockoutList } from "./multiprogramlockout/MultiprogramlockoutList";
import { MultiprogramlockoutCreate } from "./multiprogramlockout/MultiprogramlockoutCreate";
import { MultiprogramlockoutEdit } from "./multiprogramlockout/MultiprogramlockoutEdit";
import { MultiprogramlockoutShow } from "./multiprogramlockout/MultiprogramlockoutShow";
import { ParentInfoList } from "./parentInfo/ParentInfoList";
import { ParentInfoCreate } from "./parentInfo/ParentInfoCreate";
import { ParentInfoEdit } from "./parentInfo/ParentInfoEdit";
import { ParentInfoShow } from "./parentInfo/ParentInfoShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { PaymentAuditList } from "./paymentAudit/PaymentAuditList";
import { PaymentAuditCreate } from "./paymentAudit/PaymentAuditCreate";
import { PaymentAuditEdit } from "./paymentAudit/PaymentAuditEdit";
import { PaymentAuditShow } from "./paymentAudit/PaymentAuditShow";
import { PaymentItemList } from "./paymentItem/PaymentItemList";
import { PaymentItemCreate } from "./paymentItem/PaymentItemCreate";
import { PaymentItemEdit } from "./paymentItem/PaymentItemEdit";
import { PaymentItemShow } from "./paymentItem/PaymentItemShow";
import { PaymentNewList } from "./paymentNew/PaymentNewList";
import { PaymentNewCreate } from "./paymentNew/PaymentNewCreate";
import { PaymentNewEdit } from "./paymentNew/PaymentNewEdit";
import { PaymentNewShow } from "./paymentNew/PaymentNewShow";
import { PaymentVoucherList } from "./paymentVoucher/PaymentVoucherList";
import { PaymentVoucherCreate } from "./paymentVoucher/PaymentVoucherCreate";
import { PaymentVoucherEdit } from "./paymentVoucher/PaymentVoucherEdit";
import { PaymentVoucherShow } from "./paymentVoucher/PaymentVoucherShow";
import { PeSlateAppList } from "./peSlateApp/PeSlateAppList";
import { PeSlateAppCreate } from "./peSlateApp/PeSlateAppCreate";
import { PeSlateAppEdit } from "./peSlateApp/PeSlateAppEdit";
import { PeSlateAppShow } from "./peSlateApp/PeSlateAppShow";
import { PeriodList } from "./period/PeriodList";
import { PeriodCreate } from "./period/PeriodCreate";
import { PeriodEdit } from "./period/PeriodEdit";
import { PeriodShow } from "./period/PeriodShow";
import { PeriodApplicationList } from "./periodApplication/PeriodApplicationList";
import { PeriodApplicationCreate } from "./periodApplication/PeriodApplicationCreate";
import { PeriodApplicationEdit } from "./periodApplication/PeriodApplicationEdit";
import { PeriodApplicationShow } from "./periodApplication/PeriodApplicationShow";
import { PeriodProgramList } from "./periodProgram/PeriodProgramList";
import { PeriodProgramCreate } from "./periodProgram/PeriodProgramCreate";
import { PeriodProgramEdit } from "./periodProgram/PeriodProgramEdit";
import { PeriodProgramShow } from "./periodProgram/PeriodProgramShow";
import { PeriodTypeList } from "./periodType/PeriodTypeList";
import { PeriodTypeCreate } from "./periodType/PeriodTypeCreate";
import { PeriodTypeEdit } from "./periodType/PeriodTypeEdit";
import { PeriodTypeShow } from "./periodType/PeriodTypeShow";
import { PeriodUmbrellaList } from "./periodUmbrella/PeriodUmbrellaList";
import { PeriodUmbrellaCreate } from "./periodUmbrella/PeriodUmbrellaCreate";
import { PeriodUmbrellaEdit } from "./periodUmbrella/PeriodUmbrellaEdit";
import { PeriodUmbrellaShow } from "./periodUmbrella/PeriodUmbrellaShow";
import { PhoneScreenList } from "./phoneScreen/PhoneScreenList";
import { PhoneScreenCreate } from "./phoneScreen/PhoneScreenCreate";
import { PhoneScreenEdit } from "./phoneScreen/PhoneScreenEdit";
import { PhoneScreenShow } from "./phoneScreen/PhoneScreenShow";
import { PositiveFactorList } from "./positiveFactor/PositiveFactorList";
import { PositiveFactorCreate } from "./positiveFactor/PositiveFactorCreate";
import { PositiveFactorEdit } from "./positiveFactor/PositiveFactorEdit";
import { PositiveFactorShow } from "./positiveFactor/PositiveFactorShow";
import { ProgramList } from "./program/ProgramList";
import { ProgramCreate } from "./program/ProgramCreate";
import { ProgramEdit } from "./program/ProgramEdit";
import { ProgramShow } from "./program/ProgramShow";
import { ProgramGroupList } from "./programGroup/ProgramGroupList";
import { ProgramGroupCreate } from "./programGroup/ProgramGroupCreate";
import { ProgramGroupEdit } from "./programGroup/ProgramGroupEdit";
import { ProgramGroupShow } from "./programGroup/ProgramGroupShow";
import { ProgramGroupGroupTypeList } from "./programGroupGroupType/ProgramGroupGroupTypeList";
import { ProgramGroupGroupTypeCreate } from "./programGroupGroupType/ProgramGroupGroupTypeCreate";
import { ProgramGroupGroupTypeEdit } from "./programGroupGroupType/ProgramGroupGroupTypeEdit";
import { ProgramGroupGroupTypeShow } from "./programGroupGroupType/ProgramGroupGroupTypeShow";
import { ProgramGroupProgramList } from "./programGroupProgram/ProgramGroupProgramList";
import { ProgramGroupProgramCreate } from "./programGroupProgram/ProgramGroupProgramCreate";
import { ProgramGroupProgramEdit } from "./programGroupProgram/ProgramGroupProgramEdit";
import { ProgramGroupProgramShow } from "./programGroupProgram/ProgramGroupProgramShow";
import { ProgramGroupRoleList } from "./programGroupRole/ProgramGroupRoleList";
import { ProgramGroupRoleCreate } from "./programGroupRole/ProgramGroupRoleCreate";
import { ProgramGroupRoleEdit } from "./programGroupRole/ProgramGroupRoleEdit";
import { ProgramGroupRoleShow } from "./programGroupRole/ProgramGroupRoleShow";
import { ProgramGroupTypeList } from "./programGroupType/ProgramGroupTypeList";
import { ProgramGroupTypeCreate } from "./programGroupType/ProgramGroupTypeCreate";
import { ProgramGroupTypeEdit } from "./programGroupType/ProgramGroupTypeEdit";
import { ProgramGroupTypeShow } from "./programGroupType/ProgramGroupTypeShow";
import { ProgramTypeList } from "./programType/ProgramTypeList";
import { ProgramTypeCreate } from "./programType/ProgramTypeCreate";
import { ProgramTypeEdit } from "./programType/ProgramTypeEdit";
import { ProgramTypeShow } from "./programType/ProgramTypeShow";
import { ProgramModelList } from "./programModel/ProgramModelList";
import { ProgramModelCreate } from "./programModel/ProgramModelCreate";
import { ProgramModelEdit } from "./programModel/ProgramModelEdit";
import { ProgramModelShow } from "./programModel/ProgramModelShow";
import { ProgramsApplicationreqList } from "./programsApplicationreq/ProgramsApplicationreqList";
import { ProgramsApplicationreqCreate } from "./programsApplicationreq/ProgramsApplicationreqCreate";
import { ProgramsApplicationreqEdit } from "./programsApplicationreq/ProgramsApplicationreqEdit";
import { ProgramsApplicationreqShow } from "./programsApplicationreq/ProgramsApplicationreqShow";
import { ProgramsUnitList } from "./programsUnit/ProgramsUnitList";
import { ProgramsUnitCreate } from "./programsUnit/ProgramsUnitCreate";
import { ProgramsUnitEdit } from "./programsUnit/ProgramsUnitEdit";
import { ProgramsUnitShow } from "./programsUnit/ProgramsUnitShow";
import { PromotionHistoryList } from "./promotionHistory/PromotionHistoryList";
import { PromotionHistoryCreate } from "./promotionHistory/PromotionHistoryCreate";
import { PromotionHistoryEdit } from "./promotionHistory/PromotionHistoryEdit";
import { PromotionHistoryShow } from "./promotionHistory/PromotionHistoryShow";
import { PromotionHistoryCopyList } from "./promotionHistoryCopy/PromotionHistoryCopyList";
import { PromotionHistoryCopyCreate } from "./promotionHistoryCopy/PromotionHistoryCopyCreate";
import { PromotionHistoryCopyEdit } from "./promotionHistoryCopy/PromotionHistoryCopyEdit";
import { PromotionHistoryCopyShow } from "./promotionHistoryCopy/PromotionHistoryCopyShow";
import { PromotionStatusList } from "./promotionStatus/PromotionStatusList";
import { PromotionStatusCreate } from "./promotionStatus/PromotionStatusCreate";
import { PromotionStatusEdit } from "./promotionStatus/PromotionStatusEdit";
import { PromotionStatusShow } from "./promotionStatus/PromotionStatusShow";
import { PublicationList } from "./publication/PublicationList";
import { PublicationCreate } from "./publication/PublicationCreate";
import { PublicationEdit } from "./publication/PublicationEdit";
import { PublicationShow } from "./publication/PublicationShow";
import { ReclogList } from "./reclog/ReclogList";
import { ReclogCreate } from "./reclog/ReclogCreate";
import { ReclogEdit } from "./reclog/ReclogEdit";
import { ReclogShow } from "./reclog/ReclogShow";
import { RecommendList } from "./recommend/RecommendList";
import { RecommendCreate } from "./recommend/RecommendCreate";
import { RecommendEdit } from "./recommend/RecommendEdit";
import { RecommendShow } from "./recommend/RecommendShow";
import { RecommendationtypeList } from "./recommendationtype/RecommendationtypeList";
import { RecommendationtypeCreate } from "./recommendationtype/RecommendationtypeCreate";
import { RecommendationtypeEdit } from "./recommendationtype/RecommendationtypeEdit";
import { RecommendationtypeShow } from "./recommendationtype/RecommendationtypeShow";
import { RecommenderInfoList } from "./recommenderInfo/RecommenderInfoList";
import { RecommenderInfoCreate } from "./recommenderInfo/RecommenderInfoCreate";
import { RecommenderInfoEdit } from "./recommenderInfo/RecommenderInfoEdit";
import { RecommenderInfoShow } from "./recommenderInfo/RecommenderInfoShow";
import { RecommendformList } from "./recommendform/RecommendformList";
import { RecommendformCreate } from "./recommendform/RecommendformCreate";
import { RecommendformEdit } from "./recommendform/RecommendformEdit";
import { RecommendformShow } from "./recommendform/RecommendformShow";
import { RecyclableSelectionList } from "./recyclableSelection/RecyclableSelectionList";
import { RecyclableSelectionCreate } from "./recyclableSelection/RecyclableSelectionCreate";
import { RecyclableSelectionEdit } from "./recyclableSelection/RecyclableSelectionEdit";
import { RecyclableSelectionShow } from "./recyclableSelection/RecyclableSelectionShow";
import { RegistrationFeePaymentList } from "./registrationFeePayment/RegistrationFeePaymentList";
import { RegistrationFeePaymentCreate } from "./registrationFeePayment/RegistrationFeePaymentCreate";
import { RegistrationFeePaymentEdit } from "./registrationFeePayment/RegistrationFeePaymentEdit";
import { RegistrationFeePaymentShow } from "./registrationFeePayment/RegistrationFeePaymentShow";
import { RegistrationFeeStatusList } from "./registrationFeeStatus/RegistrationFeeStatusList";
import { RegistrationFeeStatusCreate } from "./registrationFeeStatus/RegistrationFeeStatusCreate";
import { RegistrationFeeStatusEdit } from "./registrationFeeStatus/RegistrationFeeStatusEdit";
import { RegistrationFeeStatusShow } from "./registrationFeeStatus/RegistrationFeeStatusShow";
import { RejectionWaiverList } from "./rejectionWaiver/RejectionWaiverList";
import { RejectionWaiverCreate } from "./rejectionWaiver/RejectionWaiverCreate";
import { RejectionWaiverEdit } from "./rejectionWaiver/RejectionWaiverEdit";
import { RejectionWaiverShow } from "./rejectionWaiver/RejectionWaiverShow";
import { RequestsAccessList } from "./requestsAccess/RequestsAccessList";
import { RequestsAccessCreate } from "./requestsAccess/RequestsAccessCreate";
import { RequestsAccessEdit } from "./requestsAccess/RequestsAccessEdit";
import { RequestsAccessShow } from "./requestsAccess/RequestsAccessShow";
import { RevgroupList } from "./revgroup/RevgroupList";
import { RevgroupCreate } from "./revgroup/RevgroupCreate";
import { RevgroupEdit } from "./revgroup/RevgroupEdit";
import { RevgroupShow } from "./revgroup/RevgroupShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { ReviewIniList } from "./reviewIni/ReviewIniList";
import { ReviewIniCreate } from "./reviewIni/ReviewIniCreate";
import { ReviewIniEdit } from "./reviewIni/ReviewIniEdit";
import { ReviewIniShow } from "./reviewIni/ReviewIniShow";
import { ReviewIniAdminList } from "./reviewIniAdmin/ReviewIniAdminList";
import { ReviewIniAdminCreate } from "./reviewIniAdmin/ReviewIniAdminCreate";
import { ReviewIniAdminEdit } from "./reviewIniAdmin/ReviewIniAdminEdit";
import { ReviewIniAdminShow } from "./reviewIniAdmin/ReviewIniAdminShow";
import { ReviewIniAlternativeProgramList } from "./reviewIniAlternativeProgram/ReviewIniAlternativeProgramList";
import { ReviewIniAlternativeProgramCreate } from "./reviewIniAlternativeProgram/ReviewIniAlternativeProgramCreate";
import { ReviewIniAlternativeProgramEdit } from "./reviewIniAlternativeProgram/ReviewIniAlternativeProgramEdit";
import { ReviewIniAlternativeProgramShow } from "./reviewIniAlternativeProgram/ReviewIniAlternativeProgramShow";
import { ReviewIniExperienceScaleList } from "./reviewIniExperienceScale/ReviewIniExperienceScaleList";
import { ReviewIniExperienceScaleCreate } from "./reviewIniExperienceScale/ReviewIniExperienceScaleCreate";
import { ReviewIniExperienceScaleEdit } from "./reviewIniExperienceScale/ReviewIniExperienceScaleEdit";
import { ReviewIniExperienceScaleShow } from "./reviewIniExperienceScale/ReviewIniExperienceScaleShow";
import { ReviewIniOverallScaleList } from "./reviewIniOverallScale/ReviewIniOverallScaleList";
import { ReviewIniOverallScaleCreate } from "./reviewIniOverallScale/ReviewIniOverallScaleCreate";
import { ReviewIniOverallScaleEdit } from "./reviewIniOverallScale/ReviewIniOverallScaleEdit";
import { ReviewIniOverallScaleShow } from "./reviewIniOverallScale/ReviewIniOverallScaleShow";
import { ReviewPositiveFactorList } from "./reviewPositiveFactor/ReviewPositiveFactorList";
import { ReviewPositiveFactorCreate } from "./reviewPositiveFactor/ReviewPositiveFactorCreate";
import { ReviewPositiveFactorEdit } from "./reviewPositiveFactor/ReviewPositiveFactorEdit";
import { ReviewPositiveFactorShow } from "./reviewPositiveFactor/ReviewPositiveFactorShow";
import { ReviewPositiveFactorOtherList } from "./reviewPositiveFactorOther/ReviewPositiveFactorOtherList";
import { ReviewPositiveFactorOtherCreate } from "./reviewPositiveFactorOther/ReviewPositiveFactorOtherCreate";
import { ReviewPositiveFactorOtherEdit } from "./reviewPositiveFactorOther/ReviewPositiveFactorOtherEdit";
import { ReviewPositiveFactorOtherShow } from "./reviewPositiveFactorOther/ReviewPositiveFactorOtherShow";
import { ReviewRiskFactorList } from "./reviewRiskFactor/ReviewRiskFactorList";
import { ReviewRiskFactorCreate } from "./reviewRiskFactor/ReviewRiskFactorCreate";
import { ReviewRiskFactorEdit } from "./reviewRiskFactor/ReviewRiskFactorEdit";
import { ReviewRiskFactorShow } from "./reviewRiskFactor/ReviewRiskFactorShow";
import { ReviewRiskFactorOtherList } from "./reviewRiskFactorOther/ReviewRiskFactorOtherList";
import { ReviewRiskFactorOtherCreate } from "./reviewRiskFactorOther/ReviewRiskFactorOtherCreate";
import { ReviewRiskFactorOtherEdit } from "./reviewRiskFactorOther/ReviewRiskFactorOtherEdit";
import { ReviewRiskFactorOtherShow } from "./reviewRiskFactorOther/ReviewRiskFactorOtherShow";
import { ReviewerPreferenceList } from "./reviewerPreference/ReviewerPreferenceList";
import { ReviewerPreferenceCreate } from "./reviewerPreference/ReviewerPreferenceCreate";
import { ReviewerPreferenceEdit } from "./reviewerPreference/ReviewerPreferenceEdit";
import { ReviewerPreferenceShow } from "./reviewerPreference/ReviewerPreferenceShow";
import { RiskFactorList } from "./riskFactor/RiskFactorList";
import { RiskFactorCreate } from "./riskFactor/RiskFactorCreate";
import { RiskFactorEdit } from "./riskFactor/RiskFactorEdit";
import { RiskFactorShow } from "./riskFactor/RiskFactorShow";
import { RissFundingList } from "./rissFunding/RissFundingList";
import { RissFundingCreate } from "./rissFunding/RissFundingCreate";
import { RissFundingEdit } from "./rissFunding/RissFundingEdit";
import { RissFundingShow } from "./rissFunding/RissFundingShow";
import { RissMcnairList } from "./rissMcnair/RissMcnairList";
import { RissMcnairCreate } from "./rissMcnair/RissMcnairCreate";
import { RissMcnairEdit } from "./rissMcnair/RissMcnairEdit";
import { RissMcnairShow } from "./rissMcnair/RissMcnairShow";
import { SchoolList } from "./school/SchoolList";
import { SchoolCreate } from "./school/SchoolCreate";
import { SchoolEdit } from "./school/SchoolEdit";
import { SchoolShow } from "./school/SchoolShow";
import { ScsUserList } from "./scsUser/ScsUserList";
import { ScsUserCreate } from "./scsUser/ScsUserCreate";
import { ScsUserEdit } from "./scsUser/ScsUserEdit";
import { ScsUserShow } from "./scsUser/ScsUserShow";
import { ScsUserWebisoList } from "./scsUserWebiso/ScsUserWebisoList";
import { ScsUserWebisoCreate } from "./scsUserWebiso/ScsUserWebisoCreate";
import { ScsUserWebisoEdit } from "./scsUserWebiso/ScsUserWebisoEdit";
import { ScsUserWebisoShow } from "./scsUserWebiso/ScsUserWebisoShow";
import { SearchTextTestList } from "./searchTextTest/SearchTextTestList";
import { SearchTextTestCreate } from "./searchTextTest/SearchTextTestCreate";
import { SearchTextTestEdit } from "./searchTextTest/SearchTextTestEdit";
import { SearchTextTestShow } from "./searchTextTest/SearchTextTestShow";
import { SelfGenderList } from "./selfGender/SelfGenderList";
import { SelfGenderCreate } from "./selfGender/SelfGenderCreate";
import { SelfGenderEdit } from "./selfGender/SelfGenderEdit";
import { SelfGenderShow } from "./selfGender/SelfGenderShow";
import { SemPreviousCourseList } from "./semPreviousCourse/SemPreviousCourseList";
import { SemPreviousCourseCreate } from "./semPreviousCourse/SemPreviousCourseCreate";
import { SemPreviousCourseEdit } from "./semPreviousCourse/SemPreviousCourseEdit";
import { SemPreviousCourseShow } from "./semPreviousCourse/SemPreviousCourseShow";
import { SlateAppSchoolList } from "./slateAppSchool/SlateAppSchoolList";
import { SlateAppSchoolCreate } from "./slateAppSchool/SlateAppSchoolCreate";
import { SlateAppSchoolEdit } from "./slateAppSchool/SlateAppSchoolEdit";
import { SlateAppSchoolShow } from "./slateAppSchool/SlateAppSchoolShow";
import { SlateAppList } from "./slateApp/SlateAppList";
import { SlateAppCreate } from "./slateApp/SlateAppCreate";
import { SlateAppEdit } from "./slateApp/SlateAppEdit";
import { SlateAppShow } from "./slateApp/SlateAppShow";
import { SlateAppsMseReviewedList } from "./slateAppsMseReviewed/SlateAppsMseReviewedList";
import { SlateAppsMseReviewedCreate } from "./slateAppsMseReviewed/SlateAppsMseReviewedCreate";
import { SlateAppsMseReviewedEdit } from "./slateAppsMseReviewed/SlateAppsMseReviewedEdit";
import { SlateAppsMseReviewedShow } from "./slateAppsMseReviewed/SlateAppsMseReviewedShow";
import { SlateAwAppIdList } from "./slateAwAppId/SlateAwAppIdList";
import { SlateAwAppIdCreate } from "./slateAwAppId/SlateAwAppIdCreate";
import { SlateAwAppIdEdit } from "./slateAwAppId/SlateAwAppIdEdit";
import { SlateAwAppIdShow } from "./slateAwAppId/SlateAwAppIdShow";
import { SlateCodilityList } from "./slateCodility/SlateCodilityList";
import { SlateCodilityCreate } from "./slateCodility/SlateCodilityCreate";
import { SlateCodilityEdit } from "./slateCodility/SlateCodilityEdit";
import { SlateCodilityShow } from "./slateCodility/SlateCodilityShow";
import { SlateEmail2AwUserList } from "./slateEmail2AwUser/SlateEmail2AwUserList";
import { SlateEmail2AwUserCreate } from "./slateEmail2AwUser/SlateEmail2AwUserCreate";
import { SlateEmail2AwUserEdit } from "./slateEmail2AwUser/SlateEmail2AwUserEdit";
import { SlateEmail2AwUserShow } from "./slateEmail2AwUser/SlateEmail2AwUserShow";
import { SlateEmployList } from "./slateEmploy/SlateEmployList";
import { SlateEmployCreate } from "./slateEmploy/SlateEmployCreate";
import { SlateEmployEdit } from "./slateEmploy/SlateEmployEdit";
import { SlateEmployShow } from "./slateEmploy/SlateEmployShow";
import { SlateIeltList } from "./slateIelt/SlateIeltList";
import { SlateIeltCreate } from "./slateIelt/SlateIeltCreate";
import { SlateIeltEdit } from "./slateIelt/SlateIeltEdit";
import { SlateIeltShow } from "./slateIelt/SlateIeltShow";
import { SlateLangCodeList } from "./slateLangCode/SlateLangCodeList";
import { SlateLangCodeCreate } from "./slateLangCode/SlateLangCodeCreate";
import { SlateLangCodeEdit } from "./slateLangCode/SlateLangCodeEdit";
import { SlateLangCodeShow } from "./slateLangCode/SlateLangCodeShow";
import { SlateMaterialList } from "./slateMaterial/SlateMaterialList";
import { SlateMaterialCreate } from "./slateMaterial/SlateMaterialCreate";
import { SlateMaterialEdit } from "./slateMaterial/SlateMaterialEdit";
import { SlateMaterialShow } from "./slateMaterial/SlateMaterialShow";
import { SlateOrgList } from "./slateOrg/SlateOrgList";
import { SlateOrgCreate } from "./slateOrg/SlateOrgCreate";
import { SlateOrgEdit } from "./slateOrg/SlateOrgEdit";
import { SlateOrgShow } from "./slateOrg/SlateOrgShow";
import { SlateOrgsAllList } from "./slateOrgsAll/SlateOrgsAllList";
import { SlateOrgsAllCreate } from "./slateOrgsAll/SlateOrgsAllCreate";
import { SlateOrgsAllEdit } from "./slateOrgsAll/SlateOrgsAllEdit";
import { SlateOrgsAllShow } from "./slateOrgsAll/SlateOrgsAllShow";
import { SlateProgramList } from "./slateProgram/SlateProgramList";
import { SlateProgramCreate } from "./slateProgram/SlateProgramCreate";
import { SlateProgramEdit } from "./slateProgram/SlateProgramEdit";
import { SlateProgramShow } from "./slateProgram/SlateProgramShow";
import { SlateProgramsMseReviewedList } from "./slateProgramsMseReviewed/SlateProgramsMseReviewedList";
import { SlateProgramsMseReviewedCreate } from "./slateProgramsMseReviewed/SlateProgramsMseReviewedCreate";
import { SlateProgramsMseReviewedEdit } from "./slateProgramsMseReviewed/SlateProgramsMseReviewedEdit";
import { SlateProgramsMseReviewedShow } from "./slateProgramsMseReviewed/SlateProgramsMseReviewedShow";
import { SlatePubList } from "./slatePub/SlatePubList";
import { SlatePubCreate } from "./slatePub/SlatePubCreate";
import { SlatePubEdit } from "./slatePub/SlatePubEdit";
import { SlatePubShow } from "./slatePub/SlatePubShow";
import { SlateRecommendList } from "./slateRecommend/SlateRecommendList";
import { SlateRecommendCreate } from "./slateRecommend/SlateRecommendCreate";
import { SlateRecommendEdit } from "./slateRecommend/SlateRecommendEdit";
import { SlateRecommendShow } from "./slateRecommend/SlateRecommendShow";
import { SlateRecommend1List } from "./slateRecommend1/SlateRecommend1List";
import { SlateRecommend1Create } from "./slateRecommend1/SlateRecommend1Create";
import { SlateRecommend1Edit } from "./slateRecommend1/SlateRecommend1Edit";
import { SlateRecommend1Show } from "./slateRecommend1/SlateRecommend1Show";
import { SlateRecommend2List } from "./slateRecommend2/SlateRecommend2List";
import { SlateRecommend2Create } from "./slateRecommend2/SlateRecommend2Create";
import { SlateRecommend2Edit } from "./slateRecommend2/SlateRecommend2Edit";
import { SlateRecommend2Show } from "./slateRecommend2/SlateRecommend2Show";
import { SlateRecommend3List } from "./slateRecommend3/SlateRecommend3List";
import { SlateRecommend3Create } from "./slateRecommend3/SlateRecommend3Create";
import { SlateRecommend3Edit } from "./slateRecommend3/SlateRecommend3Edit";
import { SlateRecommend3Show } from "./slateRecommend3/SlateRecommend3Show";
import { SlateReviewList } from "./slateReview/SlateReviewList";
import { SlateReviewCreate } from "./slateReview/SlateReviewCreate";
import { SlateReviewEdit } from "./slateReview/SlateReviewEdit";
import { SlateReviewShow } from "./slateReview/SlateReviewShow";
import { SlateSuppinfoList } from "./slateSuppinfo/SlateSuppinfoList";
import { SlateSuppinfoCreate } from "./slateSuppinfo/SlateSuppinfoCreate";
import { SlateSuppinfoEdit } from "./slateSuppinfo/SlateSuppinfoEdit";
import { SlateSuppinfoShow } from "./slateSuppinfo/SlateSuppinfoShow";
import { SlateTestScoreList } from "./slateTestScore/SlateTestScoreList";
import { SlateTestScoreCreate } from "./slateTestScore/SlateTestScoreCreate";
import { SlateTestScoreEdit } from "./slateTestScore/SlateTestScoreEdit";
import { SlateTestScoreShow } from "./slateTestScore/SlateTestScoreShow";
import { SlateToeflList } from "./slateToefl/SlateToeflList";
import { SlateToeflCreate } from "./slateToefl/SlateToeflCreate";
import { SlateToeflEdit } from "./slateToefl/SlateToeflEdit";
import { SlateToeflShow } from "./slateToefl/SlateToeflShow";
import { SpecialConsiderationList } from "./specialConsideration/SpecialConsiderationList";
import { SpecialConsiderationCreate } from "./specialConsideration/SpecialConsiderationCreate";
import { SpecialConsiderationEdit } from "./specialConsideration/SpecialConsiderationEdit";
import { SpecialConsiderationShow } from "./specialConsideration/SpecialConsiderationShow";
import { StateList } from "./state/StateList";
import { StateCreate } from "./state/StateCreate";
import { StateEdit } from "./state/StateEdit";
import { StateShow } from "./state/StateShow";
import { StudentDecisionList } from "./studentDecision/StudentDecisionList";
import { StudentDecisionCreate } from "./studentDecision/StudentDecisionCreate";
import { StudentDecisionEdit } from "./studentDecision/StudentDecisionEdit";
import { StudentDecisionShow } from "./studentDecision/StudentDecisionShow";
import { StudentDecisionHistoryList } from "./studentDecisionHistory/StudentDecisionHistoryList";
import { StudentDecisionHistoryCreate } from "./studentDecisionHistory/StudentDecisionHistoryCreate";
import { StudentDecisionHistoryEdit } from "./studentDecisionHistory/StudentDecisionHistoryEdit";
import { StudentDecisionHistoryShow } from "./studentDecisionHistory/StudentDecisionHistoryShow";
import { StudentDecisionUniversityList } from "./studentDecisionUniversity/StudentDecisionUniversityList";
import { StudentDecisionUniversityCreate } from "./studentDecisionUniversity/StudentDecisionUniversityCreate";
import { StudentDecisionUniversityEdit } from "./studentDecisionUniversity/StudentDecisionUniversityEdit";
import { StudentDecisionUniversityShow } from "./studentDecisionUniversity/StudentDecisionUniversityShow";
import { SystemenvList } from "./systemenv/SystemenvList";
import { SystemenvCreate } from "./systemenv/SystemenvCreate";
import { SystemenvEdit } from "./systemenv/SystemenvEdit";
import { SystemenvShow } from "./systemenv/SystemenvShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TagMemberList } from "./tagMember/TagMemberList";
import { TagMemberCreate } from "./tagMember/TagMemberCreate";
import { TagMemberEdit } from "./tagMember/TagMemberEdit";
import { TagMemberShow } from "./tagMember/TagMemberShow";
import { TagInstanceList } from "./tagInstance/TagInstanceList";
import { TagInstanceCreate } from "./tagInstance/TagInstanceCreate";
import { TagInstanceEdit } from "./tagInstance/TagInstanceEdit";
import { TagInstanceShow } from "./tagInstance/TagInstanceShow";
import { TeachingExperienceList } from "./teachingExperience/TeachingExperienceList";
import { TeachingExperienceCreate } from "./teachingExperience/TeachingExperienceCreate";
import { TeachingExperienceEdit } from "./teachingExperience/TeachingExperienceEdit";
import { TeachingExperienceShow } from "./teachingExperience/TeachingExperienceShow";
import { TesttableforBansheeList } from "./testtableforBanshee/TesttableforBansheeList";
import { TesttableforBansheeCreate } from "./testtableforBanshee/TesttableforBansheeCreate";
import { TesttableforBansheeEdit } from "./testtableforBanshee/TesttableforBansheeEdit";
import { TesttableforBansheeShow } from "./testtableforBanshee/TesttableforBansheeShow";
import { TestusersInfoList } from "./testusersInfo/TestusersInfoList";
import { TestusersInfoCreate } from "./testusersInfo/TestusersInfoCreate";
import { TestusersInfoEdit } from "./testusersInfo/TestusersInfoEdit";
import { TestusersInfoShow } from "./testusersInfo/TestusersInfoShow";
import { ToeflList } from "./toefl/ToeflList";
import { ToeflCreate } from "./toefl/ToeflCreate";
import { ToeflEdit } from "./toefl/ToeflEdit";
import { ToeflShow } from "./toefl/ToeflShow";
import { ToeflEssentialList } from "./toeflEssential/ToeflEssentialList";
import { ToeflEssentialCreate } from "./toeflEssential/ToeflEssentialCreate";
import { ToeflEssentialEdit } from "./toeflEssential/ToeflEssentialEdit";
import { ToeflEssentialShow } from "./toeflEssential/ToeflEssentialShow";
import { ToeflItpPlusList } from "./toeflItpPlus/ToeflItpPlusList";
import { ToeflItpPlusCreate } from "./toeflItpPlus/ToeflItpPlusCreate";
import { ToeflItpPlusEdit } from "./toeflItpPlus/ToeflItpPlusEdit";
import { ToeflItpPlusShow } from "./toeflItpPlus/ToeflItpPlusShow";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { UnitPeriodList } from "./unitPeriod/UnitPeriodList";
import { UnitPeriodCreate } from "./unitPeriod/UnitPeriodCreate";
import { UnitPeriodEdit } from "./unitPeriod/UnitPeriodEdit";
import { UnitPeriodShow } from "./unitPeriod/UnitPeriodShow";
import { UnitRoleList } from "./unitRole/UnitRoleList";
import { UnitRoleCreate } from "./unitRole/UnitRoleCreate";
import { UnitRoleEdit } from "./unitRole/UnitRoleEdit";
import { UnitRoleShow } from "./unitRole/UnitRoleShow";
import { UsHsStatusList } from "./usHsStatus/UsHsStatusList";
import { UsHsStatusCreate } from "./usHsStatus/UsHsStatusCreate";
import { UsHsStatusEdit } from "./usHsStatus/UsHsStatusEdit";
import { UsHsStatusShow } from "./usHsStatus/UsHsStatusShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UsersInfoList } from "./usersInfo/UsersInfoList";
import { UsersInfoCreate } from "./usersInfo/UsersInfoCreate";
import { UsersInfoEdit } from "./usersInfo/UsersInfoEdit";
import { UsersInfoShow } from "./usersInfo/UsersInfoShow";
import { UsersOrigList } from "./usersOrig/UsersOrigList";
import { UsersOrigCreate } from "./usersOrig/UsersOrigCreate";
import { UsersOrigEdit } from "./usersOrig/UsersOrigEdit";
import { UsersOrigShow } from "./usersOrig/UsersOrigShow";
import { UsersRemoteAuthStringList } from "./usersRemoteAuthString/UsersRemoteAuthStringList";
import { UsersRemoteAuthStringCreate } from "./usersRemoteAuthString/UsersRemoteAuthStringCreate";
import { UsersRemoteAuthStringEdit } from "./usersRemoteAuthString/UsersRemoteAuthStringEdit";
import { UsersRemoteAuthStringShow } from "./usersRemoteAuthString/UsersRemoteAuthStringShow";
import { UsersinstList } from "./usersinst/UsersinstList";
import { UsersinstCreate } from "./usersinst/UsersinstCreate";
import { UsersinstEdit } from "./usersinst/UsersinstEdit";
import { UsersinstShow } from "./usersinst/UsersinstShow";
import { UsertypeList } from "./usertype/UsertypeList";
import { UsertypeCreate } from "./usertype/UsertypeCreate";
import { UsertypeEdit } from "./usertype/UsertypeEdit";
import { UsertypeShow } from "./usertype/UsertypeShow";
import { VeteranInfoList } from "./veteranInfo/VeteranInfoList";
import { VeteranInfoCreate } from "./veteranInfo/VeteranInfoCreate";
import { VeteranInfoEdit } from "./veteranInfo/VeteranInfoEdit";
import { VeteranInfoShow } from "./veteranInfo/VeteranInfoShow";
import { VideoEssayList } from "./videoEssay/VideoEssayList";
import { VideoEssayCreate } from "./videoEssay/VideoEssayCreate";
import { VideoEssayEdit } from "./videoEssay/VideoEssayEdit";
import { VideoEssayShow } from "./videoEssay/VideoEssayShow";
import { VisatypeList } from "./visatype/VisatypeList";
import { VisatypeCreate } from "./visatype/VisatypeCreate";
import { VisatypeEdit } from "./visatype/VisatypeEdit";
import { VisatypeShow } from "./visatype/VisatypeShow";
import { VoucherList } from "./voucher/VoucherList";
import { VoucherCreate } from "./voucher/VoucherCreate";
import { VoucherEdit } from "./voucher/VoucherEdit";
import { VoucherShow } from "./voucher/VoucherShow";
import { VoucherApplicationList } from "./voucherApplication/VoucherApplicationList";
import { VoucherApplicationCreate } from "./voucherApplication/VoucherApplicationCreate";
import { VoucherApplicationEdit } from "./voucherApplication/VoucherApplicationEdit";
import { VoucherApplicationShow } from "./voucherApplication/VoucherApplicationShow";
import { VoucherApplicationErrorList } from "./voucherApplicationError/VoucherApplicationErrorList";
import { VoucherApplicationErrorCreate } from "./voucherApplicationError/VoucherApplicationErrorCreate";
import { VoucherApplicationErrorEdit } from "./voucherApplicationError/VoucherApplicationErrorEdit";
import { VoucherApplicationErrorShow } from "./voucherApplicationError/VoucherApplicationErrorShow";
import { VoucherProgramList } from "./voucherProgram/VoucherProgramList";
import { VoucherProgramCreate } from "./voucherProgram/VoucherProgramCreate";
import { VoucherProgramEdit } from "./voucherProgram/VoucherProgramEdit";
import { VoucherProgramShow } from "./voucherProgram/VoucherProgramShow";
import { VoucherTypeList } from "./voucherType/VoucherTypeList";
import { VoucherTypeCreate } from "./voucherType/VoucherTypeCreate";
import { VoucherTypeEdit } from "./voucherType/VoucherTypeEdit";
import { VoucherTypeShow } from "./voucherType/VoucherTypeShow";
import { WaiverApplicationList } from "./waiverApplication/WaiverApplicationList";
import { WaiverApplicationCreate } from "./waiverApplication/WaiverApplicationCreate";
import { WaiverApplicationEdit } from "./waiverApplication/WaiverApplicationEdit";
import { WaiverApplicationShow } from "./waiverApplication/WaiverApplicationShow";
import { WaiverOrgList } from "./waiverOrg/WaiverOrgList";
import { WaiverOrgCreate } from "./waiverOrg/WaiverOrgCreate";
import { WaiverOrgEdit } from "./waiverOrg/WaiverOrgEdit";
import { WaiverOrgShow } from "./waiverOrg/WaiverOrgShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"see em you"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AaDepartment"
          list={AaDepartmentList}
          edit={AaDepartmentEdit}
          create={AaDepartmentCreate}
          show={AaDepartmentShow}
        />
        <Resource
          name="Accesslog"
          list={AccesslogList}
          edit={AccesslogEdit}
          create={AccesslogCreate}
          show={AccesslogShow}
        />
        <Resource
          name="AccesslogApplication"
          list={AccesslogApplicationList}
          edit={AccesslogApplicationEdit}
          create={AccesslogApplicationCreate}
          show={AccesslogApplicationShow}
        />
        <Resource
          name="Accesslogreplyform"
          list={AccesslogreplyformList}
          edit={AccesslogreplyformEdit}
          create={AccesslogreplyformCreate}
          show={AccesslogreplyformShow}
        />
        <Resource
          name="AcoPal"
          list={AcoPalList}
          edit={AcoPalEdit}
          create={AcoPalCreate}
          show={AcoPalShow}
        />
        <Resource
          name="AdmissionLetter"
          list={AdmissionLetterList}
          edit={AdmissionLetterEdit}
          create={AdmissionLetterCreate}
          show={AdmissionLetterShow}
        />
        <Resource
          name="Admission"
          list={AdmissionList}
          edit={AdmissionEdit}
          create={AdmissionCreate}
          show={AdmissionShow}
        />
        <Resource
          name="Advisor"
          list={AdvisorList}
          edit={AdvisorEdit}
          create={AdvisorCreate}
          show={AdvisorShow}
        />
        <Resource
          name="ApplicantIpedsRace"
          list={ApplicantIpedsRaceList}
          edit={ApplicantIpedsRaceEdit}
          create={ApplicantIpedsRaceCreate}
          show={ApplicantIpedsRaceShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="ApplicationAdminNote"
          list={ApplicationAdminNoteList}
          edit={ApplicationAdminNoteEdit}
          create={ApplicationAdminNoteCreate}
          show={ApplicationAdminNoteShow}
        />
        <Resource
          name="ApplicationContent"
          list={ApplicationContentList}
          edit={ApplicationContentEdit}
          create={ApplicationContentCreate}
          show={ApplicationContentShow}
        />
        <Resource
          name="ApplicationDecision"
          list={ApplicationDecisionList}
          edit={ApplicationDecisionEdit}
          create={ApplicationDecisionCreate}
          show={ApplicationDecisionShow}
        />
        <Resource
          name="ApplicationDecisionIni"
          list={ApplicationDecisionIniList}
          edit={ApplicationDecisionIniEdit}
          create={ApplicationDecisionIniCreate}
          show={ApplicationDecisionIniShow}
        />
        <Resource
          name="ApplicationDecisionSchool"
          list={ApplicationDecisionSchoolList}
          edit={ApplicationDecisionSchoolEdit}
          create={ApplicationDecisionSchoolCreate}
          show={ApplicationDecisionSchoolShow}
        />
        <Resource
          name="ApplicationMergeFile"
          list={ApplicationMergeFileList}
          edit={ApplicationMergeFileEdit}
          create={ApplicationMergeFileCreate}
          show={ApplicationMergeFileShow}
        />
        <Resource
          name="ApplicationPeriod"
          list={ApplicationPeriodList}
          edit={ApplicationPeriodEdit}
          create={ApplicationPeriodCreate}
          show={ApplicationPeriodShow}
        />
        <Resource
          name="ApplicationProgramLetter"
          list={ApplicationProgramLetterList}
          edit={ApplicationProgramLetterEdit}
          create={ApplicationProgramLetterCreate}
          show={ApplicationProgramLetterShow}
        />
        <Resource
          name="Applicationreq"
          list={ApplicationreqList}
          edit={ApplicationreqEdit}
          create={ApplicationreqCreate}
          show={ApplicationreqShow}
        />
        <Resource
          name="Assistantship"
          list={AssistantshipList}
          edit={AssistantshipEdit}
          create={AssistantshipCreate}
          show={AssistantshipShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="AttendanceStatus"
          list={AttendanceStatusList}
          edit={AttendanceStatusEdit}
          create={AttendanceStatusCreate}
          show={AttendanceStatusShow}
        />
        <Resource
          name="BfDepartment"
          list={BfDepartmentList}
          edit={BfDepartmentEdit}
          create={BfDepartmentCreate}
          show={BfDepartmentShow}
        />
        <Resource
          name="BlacklistReviewer"
          list={BlacklistReviewerList}
          edit={BlacklistReviewerEdit}
          create={BlacklistReviewerCreate}
          show={BlacklistReviewerShow}
        />
        <Resource
          name="Campus"
          list={CampusList}
          edit={CampusEdit}
          create={CampusCreate}
          show={CampusShow}
        />
        <Resource
          name="CashnetDirect"
          list={CashnetDirectList}
          edit={CashnetDirectEdit}
          create={CashnetDirectCreate}
          show={CashnetDirectShow}
        />
        <Resource
          name="CashnetPayment"
          list={CashnetPaymentList}
          edit={CashnetPaymentEdit}
          create={CashnetPaymentCreate}
          show={CashnetPaymentShow}
        />
        <Resource
          name="CashnetPaymentCopy"
          list={CashnetPaymentCopyList}
          edit={CashnetPaymentCopyEdit}
          create={CashnetPaymentCopyCreate}
          show={CashnetPaymentCopyShow}
        />
        <Resource
          name="CcAuthNotification"
          list={CcAuthNotificationList}
          edit={CcAuthNotificationEdit}
          create={CcAuthNotificationCreate}
          show={CcAuthNotificationShow}
        />
        <Resource
          name="CcPaymentStatus"
          list={CcPaymentStatusList}
          edit={CcPaymentStatusEdit}
          create={CcPaymentStatusCreate}
          show={CcPaymentStatusShow}
        />
        <Resource
          name="CcTransaction"
          list={CcTransactionList}
          edit={CcTransactionEdit}
          create={CcTransactionCreate}
          show={CcTransactionShow}
        />
        <Resource
          name="CcTransactionDetail"
          list={CcTransactionDetailList}
          edit={CcTransactionDetailEdit}
          create={CcTransactionDetailCreate}
          show={CcTransactionDetailShow}
        />
        <Resource
          name="CcTransactionReport"
          list={CcTransactionReportList}
          edit={CcTransactionReportEdit}
          create={CcTransactionReportCreate}
          show={CcTransactionReportShow}
        />
        <Resource
          name="CcTransactionSummary"
          list={CcTransactionSummaryList}
          edit={CcTransactionSummaryEdit}
          create={CcTransactionSummaryCreate}
          show={CcTransactionSummaryShow}
        />
        <Resource
          name="CmuAffiliation"
          list={CmuAffiliationList}
          edit={CmuAffiliationEdit}
          create={CmuAffiliationCreate}
          show={CmuAffiliationShow}
        />
        <Resource
          name="Cohort"
          list={CohortList}
          edit={CohortEdit}
          create={CohortCreate}
          show={CohortShow}
        />
        <Resource
          name="Committee"
          list={CommitteeList}
          edit={CommitteeEdit}
          create={CommitteeCreate}
          show={CommitteeShow}
        />
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="ContentBak"
          list={ContentBakList}
          edit={ContentBakEdit}
          create={ContentBakCreate}
          show={ContentBakShow}
        />
        <Resource
          name="Contenttype"
          list={ContenttypeList}
          edit={ContenttypeEdit}
          create={ContenttypeCreate}
          show={ContenttypeShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="DatafileType"
          list={DatafileTypeList}
          edit={DatafileTypeEdit}
          create={DatafileTypeCreate}
          show={DatafileTypeShow}
        />
        <Resource
          name="Datafileinfo"
          list={DatafileinfoList}
          edit={DatafileinfoEdit}
          create={DatafileinfoCreate}
          show={DatafileinfoShow}
        />
        <Resource
          name="DecisionAoiRank"
          list={DecisionAoiRankList}
          edit={DecisionAoiRankEdit}
          create={DecisionAoiRankCreate}
          show={DecisionAoiRankShow}
        />
        <Resource
          name="DecisionAoiRankMember"
          list={DecisionAoiRankMemberList}
          edit={DecisionAoiRankMemberEdit}
          create={DecisionAoiRankMemberCreate}
          show={DecisionAoiRankMemberShow}
        />
        <Resource
          name="DecisionRank"
          list={DecisionRankList}
          edit={DecisionRankEdit}
          create={DecisionRankCreate}
          show={DecisionRankShow}
        />
        <Resource
          name="DecisionRankMember"
          list={DecisionRankMemberList}
          edit={DecisionRankMemberEdit}
          create={DecisionRankMemberCreate}
          show={DecisionRankMemberShow}
        />
        <Resource
          name="Degree"
          list={DegreeList}
          edit={DegreeEdit}
          create={DegreeCreate}
          show={DegreeShow}
        />
        <Resource
          name="DegreeLevel"
          list={DegreeLevelList}
          edit={DegreeLevelEdit}
          create={DegreeLevelCreate}
          show={DegreeLevelShow}
        />
        <Resource
          name="Degreesall"
          list={DegreesallList}
          edit={DegreesallEdit}
          create={DegreesallCreate}
          show={DegreesallShow}
        />
        <Resource
          name="Department"
          list={DepartmentList}
          edit={DepartmentEdit}
          create={DepartmentCreate}
          show={DepartmentShow}
        />
        <Resource
          name="DepartmentEnableRecycling"
          list={DepartmentEnableRecyclingList}
          edit={DepartmentEnableRecyclingEdit}
          create={DepartmentEnableRecyclingCreate}
          show={DepartmentEnableRecyclingShow}
        />
        <Resource
          name="DepartmentReplyperiod"
          list={DepartmentReplyperiodList}
          edit={DepartmentReplyperiodEdit}
          create={DepartmentReplyperiodCreate}
          show={DepartmentReplyperiodShow}
        />
        <Resource
          name="DepartmentUnit"
          list={DepartmentUnitList}
          edit={DepartmentUnitEdit}
          create={DepartmentUnitCreate}
          show={DepartmentUnitShow}
        />
        <Resource
          name="DietrichDiversity"
          list={DietrichDiversityList}
          edit={DietrichDiversityEdit}
          create={DietrichDiversityCreate}
          show={DietrichDiversityShow}
        />
        <Resource
          name="DietrichFinancialSupport"
          list={DietrichFinancialSupportList}
          edit={DietrichFinancialSupportEdit}
          create={DietrichFinancialSupportCreate}
          show={DietrichFinancialSupportShow}
        />
        <Resource
          name="DietrichRecognition"
          list={DietrichRecognitionList}
          edit={DietrichRecognitionEdit}
          create={DietrichRecognitionCreate}
          show={DietrichRecognitionShow}
        />
        <Resource
          name="DietrichSharing"
          list={DietrichSharingList}
          edit={DietrichSharingEdit}
          create={DietrichSharingCreate}
          show={DietrichSharingShow}
        />
        <Resource
          name="Disability"
          list={DisabilityList}
          edit={DisabilityEdit}
          create={DisabilityCreate}
          show={DisabilityShow}
        />
        <Resource
          name="DisabilityType"
          list={DisabilityTypeList}
          edit={DisabilityTypeEdit}
          create={DisabilityTypeCreate}
          show={DisabilityTypeShow}
        />
        <Resource
          name="Domain"
          list={DomainList}
          edit={DomainEdit}
          create={DomainCreate}
          show={DomainShow}
        />
        <Resource
          name="DomainUnit"
          list={DomainUnitList}
          edit={DomainUnitEdit}
          create={DomainUnitCreate}
          show={DomainUnitShow}
        />
        <Resource
          name="DuolingoDatum"
          list={DuolingoDatumList}
          edit={DuolingoDatumEdit}
          create={DuolingoDatumCreate}
          show={DuolingoDatumShow}
        />
        <Resource
          name="DuolingoDataCopy"
          list={DuolingoDataCopyList}
          edit={DuolingoDataCopyEdit}
          create={DuolingoDataCopyCreate}
          show={DuolingoDataCopyShow}
        />
        <Resource
          name="Duolingoscore"
          list={DuolingoscoreList}
          edit={DuolingoscoreEdit}
          create={DuolingoscoreCreate}
          show={DuolingoscoreShow}
        />
        <Resource
          name="Em2FinancialSupport"
          list={Em2FinancialSupportList}
          edit={Em2FinancialSupportEdit}
          create={Em2FinancialSupportCreate}
          show={Em2FinancialSupportShow}
        />
        <Resource
          name="Em2Sop"
          list={Em2SopList}
          edit={Em2SopEdit}
          create={Em2SopCreate}
          show={Em2SopShow}
        />
        <Resource
          name="Em2SupportingCoursework"
          list={Em2SupportingCourseworkList}
          edit={Em2SupportingCourseworkEdit}
          create={Em2SupportingCourseworkCreate}
          show={Em2SupportingCourseworkShow}
        />
        <Resource
          name="Errorlog"
          list={ErrorlogList}
          edit={ErrorlogEdit}
          create={ErrorlogCreate}
          show={ErrorlogShow}
        />
        <Resource
          name="Ethnicity"
          list={EthnicityList}
          edit={EthnicityEdit}
          create={EthnicityCreate}
          show={EthnicityShow}
        />
        <Resource
          name="EtsConfig"
          list={EtsConfigList}
          edit={EtsConfigEdit}
          create={EtsConfigCreate}
          show={EtsConfigShow}
        />
        <Resource
          name="EtsGre"
          list={EtsGreList}
          edit={EtsGreEdit}
          create={EtsGreCreate}
          show={EtsGreShow}
        />
        <Resource
          name="EtsGreCopy"
          list={EtsGreCopyList}
          edit={EtsGreCopyEdit}
          create={EtsGreCopyCreate}
          show={EtsGreCopyShow}
        />
        <Resource
          name="EtsToeflScore"
          list={EtsToeflScoreList}
          edit={EtsToeflScoreEdit}
          create={EtsToeflScoreCreate}
          show={EtsToeflScoreShow}
        />
        <Resource
          name="ExceptionApp"
          list={ExceptionAppList}
          edit={ExceptionAppEdit}
          create={ExceptionAppCreate}
          show={ExceptionAppShow}
        />
        <Resource
          name="Experience"
          list={ExperienceList}
          edit={ExperienceEdit}
          create={ExperienceCreate}
          show={ExperienceShow}
        />
        <Resource
          name="FailedMerge"
          list={FailedMergeList}
          edit={FailedMergeEdit}
          create={FailedMergeCreate}
          show={FailedMergeShow}
        />
        <Resource
          name="Fellowship"
          list={FellowshipList}
          edit={FellowshipEdit}
          create={FellowshipCreate}
          show={FellowshipShow}
        />
        <Resource
          name="Fieldsofstudy"
          list={FieldsofstudyList}
          edit={FieldsofstudyEdit}
          create={FieldsofstudyCreate}
          show={FieldsofstudyShow}
        />
        <Resource
          name="FolderLabelInfo"
          list={FolderLabelInfoList}
          edit={FolderLabelInfoEdit}
          create={FolderLabelInfoCreate}
          show={FolderLabelInfoShow}
        />
        <Resource
          name="Gender"
          list={GenderList}
          edit={GenderEdit}
          create={GenderCreate}
          show={GenderShow}
        />
        <Resource
          name="Gmatscore"
          list={GmatscoreList}
          edit={GmatscoreEdit}
          create={GmatscoreCreate}
          show={GmatscoreShow}
        />
        <Resource
          name="Gpascale"
          list={GpascaleList}
          edit={GpascaleEdit}
          create={GpascaleCreate}
          show={GpascaleShow}
        />
        <Resource
          name="Grescore"
          list={GrescoreList}
          edit={GrescoreEdit}
          create={GrescoreCreate}
          show={GrescoreShow}
        />
        <Resource
          name="GrescoreMscsWaiver"
          list={GrescoreMscsWaiverList}
          edit={GrescoreMscsWaiverEdit}
          create={GrescoreMscsWaiverCreate}
          show={GrescoreMscsWaiverShow}
        />
        <Resource
          name="Gresubjectscore"
          list={GresubjectscoreList}
          edit={GresubjectscoreEdit}
          create={GresubjectscoreCreate}
          show={GresubjectscoreShow}
        />
        <Resource
          name="GroupRank"
          list={GroupRankList}
          edit={GroupRankEdit}
          create={GroupRankCreate}
          show={GroupRankShow}
        />
        <Resource
          name="GroupRankComment"
          list={GroupRankCommentList}
          edit={GroupRankCommentEdit}
          create={GroupRankCommentCreate}
          show={GroupRankCommentShow}
        />
        <Resource
          name="GroupRankMember"
          list={GroupRankMemberList}
          edit={GroupRankMemberEdit}
          create={GroupRankMemberCreate}
          show={GroupRankMemberShow}
        />
        <Resource
          name="Highschool"
          list={HighschoolList}
          edit={HighschoolEdit}
          create={HighschoolCreate}
          show={HighschoolShow}
        />
        <Resource
          name="Ieltsscore"
          list={IeltsscoreList}
          edit={IeltsscoreEdit}
          create={IeltsscoreCreate}
          show={IeltsscoreShow}
        />
        <Resource
          name="IniDisciplinaryAction"
          list={IniDisciplinaryActionList}
          edit={IniDisciplinaryActionEdit}
          create={IniDisciplinaryActionCreate}
          show={IniDisciplinaryActionShow}
        />
        <Resource
          name="IniFinancialSupport"
          list={IniFinancialSupportList}
          edit={IniFinancialSupportEdit}
          create={IniFinancialSupportCreate}
          show={IniFinancialSupportShow}
        />
        <Resource
          name="IniSop"
          list={IniSopList}
          edit={IniSopEdit}
          create={IniSopCreate}
          show={IniSopShow}
        />
        <Resource
          name="IniSupportingCoursework"
          list={IniSupportingCourseworkList}
          edit={IniSupportingCourseworkEdit}
          create={IniSupportingCourseworkCreate}
          show={IniSupportingCourseworkShow}
        />
        <Resource
          name="IniSupportingCourseworkKobe"
          list={IniSupportingCourseworkKobeList}
          edit={IniSupportingCourseworkKobeEdit}
          create={IniSupportingCourseworkKobeCreate}
          show={IniSupportingCourseworkKobeShow}
        />
        <Resource
          name="IniYearsExperience"
          list={IniYearsExperienceList}
          edit={IniYearsExperienceEdit}
          create={IniYearsExperienceCreate}
          show={IniYearsExperienceShow}
        />
        <Resource
          name="Institute"
          list={InstituteList}
          edit={InstituteEdit}
          create={InstituteCreate}
          show={InstituteShow}
        />
        <Resource
          name="Interest"
          list={InterestList}
          edit={InterestEdit}
          create={InterestCreate}
          show={InterestShow}
        />
        <Resource
          name="IpedsEthnicity"
          list={IpedsEthnicityList}
          edit={IpedsEthnicityEdit}
          create={IpedsEthnicityCreate}
          show={IpedsEthnicityShow}
        />
        <Resource
          name="IpedsRace"
          list={IpedsRaceList}
          edit={IpedsRaceEdit}
          create={IpedsRaceCreate}
          show={IpedsRaceShow}
        />
        <Resource
          name="JiraIssue"
          list={JiraIssueList}
          edit={JiraIssueEdit}
          create={JiraIssueCreate}
          show={JiraIssueShow}
        />
        <Resource
          name="Jiravote"
          list={JiravoteList}
          edit={JiravoteEdit}
          create={JiravoteCreate}
          show={JiravoteShow}
        />
        <Resource
          name="LangProfRecommend"
          list={LangProfRecommendList}
          edit={LangProfRecommendEdit}
          create={LangProfRecommendCreate}
          show={LangProfRecommendShow}
        />
        <Resource
          name="LangProfRecommenderInfo"
          list={LangProfRecommenderInfoList}
          edit={LangProfRecommenderInfoEdit}
          create={LangProfRecommenderInfoCreate}
          show={LangProfRecommenderInfoShow}
        />
        <Resource
          name="LanguageAssessment"
          list={LanguageAssessmentList}
          edit={LanguageAssessmentEdit}
          create={LanguageAssessmentCreate}
          show={LanguageAssessmentShow}
        />
        <Resource
          name="LanguageAssessmentRating"
          list={LanguageAssessmentRatingList}
          edit={LanguageAssessmentRatingEdit}
          create={LanguageAssessmentRatingCreate}
          show={LanguageAssessmentRatingShow}
        />
        <Resource
          name="LanguageAssessmentStudyLevel"
          list={LanguageAssessmentStudyLevelList}
          edit={LanguageAssessmentStudyLevelEdit}
          create={LanguageAssessmentStudyLevelCreate}
          show={LanguageAssessmentStudyLevelShow}
        />
        <Resource
          name="LegacyEthnicity"
          list={LegacyEthnicityList}
          edit={LegacyEthnicityEdit}
          create={LegacyEthnicityCreate}
          show={LegacyEthnicityShow}
        />
        <Resource
          name="LtiMastersAdmit"
          list={LtiMastersAdmitList}
          edit={LtiMastersAdmitEdit}
          create={LtiMastersAdmitCreate}
          show={LtiMastersAdmitShow}
        />
        <Resource
          name="LuApplicationAdvisor"
          list={LuApplicationAdvisorList}
          edit={LuApplicationAdvisorEdit}
          create={LuApplicationAdvisorCreate}
          show={LuApplicationAdvisorShow}
        />
        <Resource
          name="LuApplicationAppreq"
          list={LuApplicationAppreqList}
          edit={LuApplicationAppreqEdit}
          create={LuApplicationAppreqCreate}
          show={LuApplicationAppreqShow}
        />
        <Resource
          name="LuApplicationCohort"
          list={LuApplicationCohortList}
          edit={LuApplicationCohortEdit}
          create={LuApplicationCohortCreate}
          show={LuApplicationCohortShow}
        />
        <Resource
          name="LuApplicationEtsgre"
          list={LuApplicationEtsgreList}
          edit={LuApplicationEtsgreEdit}
          create={LuApplicationEtsgreCreate}
          show={LuApplicationEtsgreShow}
        />
        <Resource
          name="LuApplicationGroup"
          list={LuApplicationGroupList}
          edit={LuApplicationGroupEdit}
          create={LuApplicationGroupCreate}
          show={LuApplicationGroupShow}
        />
        <Resource
          name="LuApplicationInterest"
          list={LuApplicationInterestList}
          edit={LuApplicationInterestEdit}
          create={LuApplicationInterestCreate}
          show={LuApplicationInterestShow}
        />
        <Resource
          name="LuApplicationProgram"
          list={LuApplicationProgramList}
          edit={LuApplicationProgramEdit}
          create={LuApplicationProgramCreate}
          show={LuApplicationProgramShow}
        />
        <Resource
          name="LuApplicationProgramsHistory"
          list={LuApplicationProgramsHistoryList}
          edit={LuApplicationProgramsHistoryEdit}
          create={LuApplicationProgramsHistoryCreate}
          show={LuApplicationProgramsHistoryShow}
        />
        <Resource
          name="LuApplicationStartSemester"
          list={LuApplicationStartSemesterList}
          edit={LuApplicationStartSemesterEdit}
          create={LuApplicationStartSemesterCreate}
          show={LuApplicationStartSemesterShow}
        />
        <Resource
          name="LuDegreesApplicationreq"
          list={LuDegreesApplicationreqList}
          edit={LuDegreesApplicationreqEdit}
          create={LuDegreesApplicationreqCreate}
          show={LuDegreesApplicationreqShow}
        />
        <Resource
          name="LuDomainDepartment"
          list={LuDomainDepartmentList}
          edit={LuDomainDepartmentEdit}
          create={LuDomainDepartmentCreate}
          show={LuDomainDepartmentShow}
        />
        <Resource
          name="LuProgramsApplicationreq"
          list={LuProgramsApplicationreqList}
          edit={LuProgramsApplicationreqEdit}
          create={LuProgramsApplicationreqCreate}
          show={LuProgramsApplicationreqShow}
        />
        <Resource
          name="LuProgramsDepartment"
          list={LuProgramsDepartmentList}
          edit={LuProgramsDepartmentEdit}
          create={LuProgramsDepartmentCreate}
          show={LuProgramsDepartmentShow}
        />
        <Resource
          name="LuProgramsInterest"
          list={LuProgramsInterestList}
          edit={LuProgramsInterestEdit}
          create={LuProgramsInterestCreate}
          show={LuProgramsInterestShow}
        />
        <Resource
          name="LuProgramsRecommendation"
          list={LuProgramsRecommendationList}
          edit={LuProgramsRecommendationEdit}
          create={LuProgramsRecommendationCreate}
          show={LuProgramsRecommendationShow}
        />
        <Resource
          name="LuReviewInterest"
          list={LuReviewInterestList}
          edit={LuReviewInterestEdit}
          create={LuReviewInterestCreate}
          show={LuReviewInterestShow}
        />
        <Resource
          name="LuReviewerGroup"
          list={LuReviewerGroupList}
          edit={LuReviewerGroupEdit}
          create={LuReviewerGroupCreate}
          show={LuReviewerGroupShow}
        />
        <Resource
          name="LuUserDepartment"
          list={LuUserDepartmentList}
          edit={LuUserDepartmentEdit}
          create={LuUserDepartmentCreate}
          show={LuUserDepartmentShow}
        />
        <Resource
          name="LuUsersUsertype"
          list={LuUsersUsertypeList}
          edit={LuUsersUsertypeEdit}
          create={LuUsersUsertypeCreate}
          show={LuUsersUsertypeShow}
        />
        <Resource
          name="LuUsersUsertypesHistory"
          list={LuUsersUsertypesHistoryList}
          edit={LuUsersUsertypesHistoryEdit}
          create={LuUsersUsertypesHistoryCreate}
          show={LuUsersUsertypesHistoryShow}
        />
        <Resource
          name="LuUsersUsertypesOrig"
          list={LuUsersUsertypesOrigList}
          edit={LuUsersUsertypesOrigEdit}
          create={LuUsersUsertypesOrigCreate}
          show={LuUsersUsertypesOrigShow}
        />
        <Resource
          name="Merge"
          list={MergeList}
          edit={MergeEdit}
          create={MergeCreate}
          show={MergeShow}
        />
        <Resource
          name="MergeApplication"
          list={MergeApplicationList}
          edit={MergeApplicationEdit}
          create={MergeApplicationCreate}
          show={MergeApplicationShow}
        />
        <Resource
          name="MergeDatafile"
          list={MergeDatafileList}
          edit={MergeDatafileEdit}
          create={MergeDatafileCreate}
          show={MergeDatafileShow}
        />
        <Resource
          name="MhciPrereq"
          list={MhciPrereqList}
          edit={MhciPrereqEdit}
          create={MhciPrereqCreate}
          show={MhciPrereqShow}
        />
        <Resource
          name="MhciPrereqsConversationComment"
          list={MhciPrereqsConversationCommentList}
          edit={MhciPrereqsConversationCommentEdit}
          create={MhciPrereqsConversationCommentCreate}
          show={MhciPrereqsConversationCommentShow}
        />
        <Resource
          name="MhciPrereqsCourseDatafile"
          list={MhciPrereqsCourseDatafileList}
          edit={MhciPrereqsCourseDatafileEdit}
          create={MhciPrereqsCourseDatafileCreate}
          show={MhciPrereqsCourseDatafileShow}
        />
        <Resource
          name="MhciPrereqsCourse"
          list={MhciPrereqsCourseList}
          edit={MhciPrereqsCourseEdit}
          create={MhciPrereqsCourseCreate}
          show={MhciPrereqsCourseShow}
        />
        <Resource
          name="MhciPrereqsDesignPortfolio"
          list={MhciPrereqsDesignPortfolioList}
          edit={MhciPrereqsDesignPortfolioEdit}
          create={MhciPrereqsDesignPortfolioCreate}
          show={MhciPrereqsDesignPortfolioShow}
        />
        <Resource
          name="MhciPrereqsProgrammingSample"
          list={MhciPrereqsProgrammingSampleList}
          edit={MhciPrereqsProgrammingSampleEdit}
          create={MhciPrereqsProgrammingSampleCreate}
          show={MhciPrereqsProgrammingSampleShow}
        />
        <Resource
          name="MhciPrereqsProgrammingTest"
          list={MhciPrereqsProgrammingTestList}
          edit={MhciPrereqsProgrammingTestEdit}
          create={MhciPrereqsProgrammingTestCreate}
          show={MhciPrereqsProgrammingTestShow}
        />
        <Resource
          name="MhciPrereqsReference"
          list={MhciPrereqsReferenceList}
          edit={MhciPrereqsReferenceEdit}
          create={MhciPrereqsReferenceCreate}
          show={MhciPrereqsReferenceShow}
        />
        <Resource
          name="MhciPrereqsReviewer"
          list={MhciPrereqsReviewerList}
          edit={MhciPrereqsReviewerEdit}
          create={MhciPrereqsReviewerCreate}
          show={MhciPrereqsReviewerShow}
        />
        <Resource
          name="MhciPrereqsStatus"
          list={MhciPrereqsStatusList}
          edit={MhciPrereqsStatusEdit}
          create={MhciPrereqsStatusCreate}
          show={MhciPrereqsStatusShow}
        />
        <Resource
          name="MhciSlateAppSchool"
          list={MhciSlateAppSchoolList}
          edit={MhciSlateAppSchoolEdit}
          create={MhciSlateAppSchoolCreate}
          show={MhciSlateAppSchoolShow}
        />
        <Resource
          name="MhciSlateApp"
          list={MhciSlateAppList}
          edit={MhciSlateAppEdit}
          create={MhciSlateAppCreate}
          show={MhciSlateAppShow}
        />
        <Resource
          name="MhciSlateGre"
          list={MhciSlateGreList}
          edit={MhciSlateGreEdit}
          create={MhciSlateGreCreate}
          show={MhciSlateGreShow}
        />
        <Resource
          name="MhciSlateIelt"
          list={MhciSlateIeltList}
          edit={MhciSlateIeltEdit}
          create={MhciSlateIeltCreate}
          show={MhciSlateIeltShow}
        />
        <Resource
          name="MhciSlatePub"
          list={MhciSlatePubList}
          edit={MhciSlatePubEdit}
          create={MhciSlatePubCreate}
          show={MhciSlatePubShow}
        />
        <Resource
          name="MhciSlateToefl"
          list={MhciSlateToeflList}
          edit={MhciSlateToeflEdit}
          create={MhciSlateToeflCreate}
          show={MhciSlateToeflShow}
        />
        <Resource
          name="MitsSlateAppSchool"
          list={MitsSlateAppSchoolList}
          edit={MitsSlateAppSchoolEdit}
          create={MitsSlateAppSchoolCreate}
          show={MitsSlateAppSchoolShow}
        />
        <Resource
          name="MitsSlateApp"
          list={MitsSlateAppList}
          edit={MitsSlateAppEdit}
          create={MitsSlateAppCreate}
          show={MitsSlateAppShow}
        />
        <Resource
          name="MitsSlateAppsMseReviewed"
          list={MitsSlateAppsMseReviewedList}
          edit={MitsSlateAppsMseReviewedEdit}
          create={MitsSlateAppsMseReviewedCreate}
          show={MitsSlateAppsMseReviewedShow}
        />
        <Resource
          name="MitsSlateCodility"
          list={MitsSlateCodilityList}
          edit={MitsSlateCodilityEdit}
          create={MitsSlateCodilityCreate}
          show={MitsSlateCodilityShow}
        />
        <Resource
          name="MitsSlateEmploy"
          list={MitsSlateEmployList}
          edit={MitsSlateEmployEdit}
          create={MitsSlateEmployCreate}
          show={MitsSlateEmployShow}
        />
        <Resource
          name="MitsSlateGre"
          list={MitsSlateGreList}
          edit={MitsSlateGreEdit}
          create={MitsSlateGreCreate}
          show={MitsSlateGreShow}
        />
        <Resource
          name="MitsSlateIelt"
          list={MitsSlateIeltList}
          edit={MitsSlateIeltEdit}
          create={MitsSlateIeltCreate}
          show={MitsSlateIeltShow}
        />
        <Resource
          name="MitsSlatePub"
          list={MitsSlatePubList}
          edit={MitsSlatePubEdit}
          create={MitsSlatePubCreate}
          show={MitsSlatePubShow}
        />
        <Resource
          name="MitsSlateRecommend"
          list={MitsSlateRecommendList}
          edit={MitsSlateRecommendEdit}
          create={MitsSlateRecommendCreate}
          show={MitsSlateRecommendShow}
        />
        <Resource
          name="MitsSlateRecommend1"
          list={MitsSlateRecommend1List}
          edit={MitsSlateRecommend1Edit}
          create={MitsSlateRecommend1Create}
          show={MitsSlateRecommend1Show}
        />
        <Resource
          name="MitsSlateRecommend2"
          list={MitsSlateRecommend2List}
          edit={MitsSlateRecommend2Edit}
          create={MitsSlateRecommend2Create}
          show={MitsSlateRecommend2Show}
        />
        <Resource
          name="MitsSlateRecommend3"
          list={MitsSlateRecommend3List}
          edit={MitsSlateRecommend3Edit}
          create={MitsSlateRecommend3Create}
          show={MitsSlateRecommend3Show}
        />
        <Resource
          name="MitsSlateReview"
          list={MitsSlateReviewList}
          edit={MitsSlateReviewEdit}
          create={MitsSlateReviewCreate}
          show={MitsSlateReviewShow}
        />
        <Resource
          name="MitsSlateSuppinfo"
          list={MitsSlateSuppinfoList}
          edit={MitsSlateSuppinfoEdit}
          create={MitsSlateSuppinfoCreate}
          show={MitsSlateSuppinfoShow}
        />
        <Resource
          name="MitsSlateToefl"
          list={MitsSlateToeflList}
          edit={MitsSlateToeflEdit}
          create={MitsSlateToeflCreate}
          show={MitsSlateToeflShow}
        />
        <Resource
          name="MlArea"
          list={MlAreaList}
          edit={MlAreaEdit}
          create={MlAreaCreate}
          show={MlAreaShow}
        />
        <Resource
          name="MlSupportingCoursework"
          list={MlSupportingCourseworkList}
          edit={MlSupportingCourseworkEdit}
          create={MlSupportingCourseworkCreate}
          show={MlSupportingCourseworkShow}
        />
        <Resource
          name="MseAqa"
          list={MseAqaList}
          edit={MseAqaEdit}
          create={MseAqaCreate}
          show={MseAqaShow}
        />
        <Resource
          name="MseBridgeCourse"
          list={MseBridgeCourseList}
          edit={MseBridgeCourseEdit}
          create={MseBridgeCourseCreate}
          show={MseBridgeCourseShow}
        />
        <Resource
          name="MseBridgeCourseDecision"
          list={MseBridgeCourseDecisionList}
          edit={MseBridgeCourseDecisionEdit}
          create={MseBridgeCourseDecisionCreate}
          show={MseBridgeCourseDecisionShow}
        />
        <Resource
          name="MseCodility"
          list={MseCodilityList}
          edit={MseCodilityEdit}
          create={MseCodilityCreate}
          show={MseCodilityShow}
        />
        <Resource
          name="MseInterview"
          list={MseInterviewList}
          edit={MseInterviewEdit}
          create={MseInterviewCreate}
          show={MseInterviewShow}
        />
        <Resource
          name="MseLetterRec"
          list={MseLetterRecList}
          edit={MseLetterRecEdit}
          create={MseLetterRecCreate}
          show={MseLetterRecShow}
        />
        <Resource
          name="MseLetterRecsDecision"
          list={MseLetterRecsDecisionList}
          edit={MseLetterRecsDecisionEdit}
          create={MseLetterRecsDecisionCreate}
          show={MseLetterRecsDecisionShow}
        />
        <Resource
          name="MseRiskFactor"
          list={MseRiskFactorList}
          edit={MseRiskFactorEdit}
          create={MseRiskFactorCreate}
          show={MseRiskFactorShow}
        />
        <Resource
          name="MseRiskFactorsDecision"
          list={MseRiskFactorsDecisionList}
          edit={MseRiskFactorsDecisionEdit}
          create={MseRiskFactorsDecisionCreate}
          show={MseRiskFactorsDecisionShow}
        />
        <Resource
          name="MseSupportingCoursework"
          list={MseSupportingCourseworkList}
          edit={MseSupportingCourseworkEdit}
          create={MseSupportingCourseworkCreate}
          show={MseSupportingCourseworkShow}
        />
        <Resource
          name="Multiprogramlockout"
          list={MultiprogramlockoutList}
          edit={MultiprogramlockoutEdit}
          create={MultiprogramlockoutCreate}
          show={MultiprogramlockoutShow}
        />
        <Resource
          name="ParentInfo"
          list={ParentInfoList}
          edit={ParentInfoEdit}
          create={ParentInfoCreate}
          show={ParentInfoShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="PaymentAudit"
          list={PaymentAuditList}
          edit={PaymentAuditEdit}
          create={PaymentAuditCreate}
          show={PaymentAuditShow}
        />
        <Resource
          name="PaymentItem"
          list={PaymentItemList}
          edit={PaymentItemEdit}
          create={PaymentItemCreate}
          show={PaymentItemShow}
        />
        <Resource
          name="PaymentNew"
          list={PaymentNewList}
          edit={PaymentNewEdit}
          create={PaymentNewCreate}
          show={PaymentNewShow}
        />
        <Resource
          name="PaymentVoucher"
          list={PaymentVoucherList}
          edit={PaymentVoucherEdit}
          create={PaymentVoucherCreate}
          show={PaymentVoucherShow}
        />
        <Resource
          name="PeSlateApp"
          list={PeSlateAppList}
          edit={PeSlateAppEdit}
          create={PeSlateAppCreate}
          show={PeSlateAppShow}
        />
        <Resource
          name="Period"
          list={PeriodList}
          edit={PeriodEdit}
          create={PeriodCreate}
          show={PeriodShow}
        />
        <Resource
          name="PeriodApplication"
          list={PeriodApplicationList}
          edit={PeriodApplicationEdit}
          create={PeriodApplicationCreate}
          show={PeriodApplicationShow}
        />
        <Resource
          name="PeriodProgram"
          list={PeriodProgramList}
          edit={PeriodProgramEdit}
          create={PeriodProgramCreate}
          show={PeriodProgramShow}
        />
        <Resource
          name="PeriodType"
          list={PeriodTypeList}
          edit={PeriodTypeEdit}
          create={PeriodTypeCreate}
          show={PeriodTypeShow}
        />
        <Resource
          name="PeriodUmbrella"
          list={PeriodUmbrellaList}
          edit={PeriodUmbrellaEdit}
          create={PeriodUmbrellaCreate}
          show={PeriodUmbrellaShow}
        />
        <Resource
          name="PhoneScreen"
          list={PhoneScreenList}
          edit={PhoneScreenEdit}
          create={PhoneScreenCreate}
          show={PhoneScreenShow}
        />
        <Resource
          name="PositiveFactor"
          list={PositiveFactorList}
          edit={PositiveFactorEdit}
          create={PositiveFactorCreate}
          show={PositiveFactorShow}
        />
        <Resource
          name="Program"
          list={ProgramList}
          edit={ProgramEdit}
          create={ProgramCreate}
          show={ProgramShow}
        />
        <Resource
          name="ProgramGroup"
          list={ProgramGroupList}
          edit={ProgramGroupEdit}
          create={ProgramGroupCreate}
          show={ProgramGroupShow}
        />
        <Resource
          name="ProgramGroupGroupType"
          list={ProgramGroupGroupTypeList}
          edit={ProgramGroupGroupTypeEdit}
          create={ProgramGroupGroupTypeCreate}
          show={ProgramGroupGroupTypeShow}
        />
        <Resource
          name="ProgramGroupProgram"
          list={ProgramGroupProgramList}
          edit={ProgramGroupProgramEdit}
          create={ProgramGroupProgramCreate}
          show={ProgramGroupProgramShow}
        />
        <Resource
          name="ProgramGroupRole"
          list={ProgramGroupRoleList}
          edit={ProgramGroupRoleEdit}
          create={ProgramGroupRoleCreate}
          show={ProgramGroupRoleShow}
        />
        <Resource
          name="ProgramGroupType"
          list={ProgramGroupTypeList}
          edit={ProgramGroupTypeEdit}
          create={ProgramGroupTypeCreate}
          show={ProgramGroupTypeShow}
        />
        <Resource
          name="ProgramType"
          list={ProgramTypeList}
          edit={ProgramTypeEdit}
          create={ProgramTypeCreate}
          show={ProgramTypeShow}
        />
        <Resource
          name="ProgramModel"
          list={ProgramModelList}
          edit={ProgramModelEdit}
          create={ProgramModelCreate}
          show={ProgramModelShow}
        />
        <Resource
          name="ProgramsApplicationreq"
          list={ProgramsApplicationreqList}
          edit={ProgramsApplicationreqEdit}
          create={ProgramsApplicationreqCreate}
          show={ProgramsApplicationreqShow}
        />
        <Resource
          name="ProgramsUnit"
          list={ProgramsUnitList}
          edit={ProgramsUnitEdit}
          create={ProgramsUnitCreate}
          show={ProgramsUnitShow}
        />
        <Resource
          name="PromotionHistory"
          list={PromotionHistoryList}
          edit={PromotionHistoryEdit}
          create={PromotionHistoryCreate}
          show={PromotionHistoryShow}
        />
        <Resource
          name="PromotionHistoryCopy"
          list={PromotionHistoryCopyList}
          edit={PromotionHistoryCopyEdit}
          create={PromotionHistoryCopyCreate}
          show={PromotionHistoryCopyShow}
        />
        <Resource
          name="PromotionStatus"
          list={PromotionStatusList}
          edit={PromotionStatusEdit}
          create={PromotionStatusCreate}
          show={PromotionStatusShow}
        />
        <Resource
          name="Publication"
          list={PublicationList}
          edit={PublicationEdit}
          create={PublicationCreate}
          show={PublicationShow}
        />
        <Resource
          name="Reclog"
          list={ReclogList}
          edit={ReclogEdit}
          create={ReclogCreate}
          show={ReclogShow}
        />
        <Resource
          name="Recommend"
          list={RecommendList}
          edit={RecommendEdit}
          create={RecommendCreate}
          show={RecommendShow}
        />
        <Resource
          name="Recommendationtype"
          list={RecommendationtypeList}
          edit={RecommendationtypeEdit}
          create={RecommendationtypeCreate}
          show={RecommendationtypeShow}
        />
        <Resource
          name="RecommenderInfo"
          list={RecommenderInfoList}
          edit={RecommenderInfoEdit}
          create={RecommenderInfoCreate}
          show={RecommenderInfoShow}
        />
        <Resource
          name="Recommendform"
          list={RecommendformList}
          edit={RecommendformEdit}
          create={RecommendformCreate}
          show={RecommendformShow}
        />
        <Resource
          name="RecyclableSelection"
          list={RecyclableSelectionList}
          edit={RecyclableSelectionEdit}
          create={RecyclableSelectionCreate}
          show={RecyclableSelectionShow}
        />
        <Resource
          name="RegistrationFeePayment"
          list={RegistrationFeePaymentList}
          edit={RegistrationFeePaymentEdit}
          create={RegistrationFeePaymentCreate}
          show={RegistrationFeePaymentShow}
        />
        <Resource
          name="RegistrationFeeStatus"
          list={RegistrationFeeStatusList}
          edit={RegistrationFeeStatusEdit}
          create={RegistrationFeeStatusCreate}
          show={RegistrationFeeStatusShow}
        />
        <Resource
          name="RejectionWaiver"
          list={RejectionWaiverList}
          edit={RejectionWaiverEdit}
          create={RejectionWaiverCreate}
          show={RejectionWaiverShow}
        />
        <Resource
          name="RequestsAccess"
          list={RequestsAccessList}
          edit={RequestsAccessEdit}
          create={RequestsAccessCreate}
          show={RequestsAccessShow}
        />
        <Resource
          name="Revgroup"
          list={RevgroupList}
          edit={RevgroupEdit}
          create={RevgroupCreate}
          show={RevgroupShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="ReviewIni"
          list={ReviewIniList}
          edit={ReviewIniEdit}
          create={ReviewIniCreate}
          show={ReviewIniShow}
        />
        <Resource
          name="ReviewIniAdmin"
          list={ReviewIniAdminList}
          edit={ReviewIniAdminEdit}
          create={ReviewIniAdminCreate}
          show={ReviewIniAdminShow}
        />
        <Resource
          name="ReviewIniAlternativeProgram"
          list={ReviewIniAlternativeProgramList}
          edit={ReviewIniAlternativeProgramEdit}
          create={ReviewIniAlternativeProgramCreate}
          show={ReviewIniAlternativeProgramShow}
        />
        <Resource
          name="ReviewIniExperienceScale"
          list={ReviewIniExperienceScaleList}
          edit={ReviewIniExperienceScaleEdit}
          create={ReviewIniExperienceScaleCreate}
          show={ReviewIniExperienceScaleShow}
        />
        <Resource
          name="ReviewIniOverallScale"
          list={ReviewIniOverallScaleList}
          edit={ReviewIniOverallScaleEdit}
          create={ReviewIniOverallScaleCreate}
          show={ReviewIniOverallScaleShow}
        />
        <Resource
          name="ReviewPositiveFactor"
          list={ReviewPositiveFactorList}
          edit={ReviewPositiveFactorEdit}
          create={ReviewPositiveFactorCreate}
          show={ReviewPositiveFactorShow}
        />
        <Resource
          name="ReviewPositiveFactorOther"
          list={ReviewPositiveFactorOtherList}
          edit={ReviewPositiveFactorOtherEdit}
          create={ReviewPositiveFactorOtherCreate}
          show={ReviewPositiveFactorOtherShow}
        />
        <Resource
          name="ReviewRiskFactor"
          list={ReviewRiskFactorList}
          edit={ReviewRiskFactorEdit}
          create={ReviewRiskFactorCreate}
          show={ReviewRiskFactorShow}
        />
        <Resource
          name="ReviewRiskFactorOther"
          list={ReviewRiskFactorOtherList}
          edit={ReviewRiskFactorOtherEdit}
          create={ReviewRiskFactorOtherCreate}
          show={ReviewRiskFactorOtherShow}
        />
        <Resource
          name="ReviewerPreference"
          list={ReviewerPreferenceList}
          edit={ReviewerPreferenceEdit}
          create={ReviewerPreferenceCreate}
          show={ReviewerPreferenceShow}
        />
        <Resource
          name="RiskFactor"
          list={RiskFactorList}
          edit={RiskFactorEdit}
          create={RiskFactorCreate}
          show={RiskFactorShow}
        />
        <Resource
          name="RissFunding"
          list={RissFundingList}
          edit={RissFundingEdit}
          create={RissFundingCreate}
          show={RissFundingShow}
        />
        <Resource
          name="RissMcnair"
          list={RissMcnairList}
          edit={RissMcnairEdit}
          create={RissMcnairCreate}
          show={RissMcnairShow}
        />
        <Resource
          name="School"
          list={SchoolList}
          edit={SchoolEdit}
          create={SchoolCreate}
          show={SchoolShow}
        />
        <Resource
          name="ScsUser"
          list={ScsUserList}
          edit={ScsUserEdit}
          create={ScsUserCreate}
          show={ScsUserShow}
        />
        <Resource
          name="ScsUserWebiso"
          list={ScsUserWebisoList}
          edit={ScsUserWebisoEdit}
          create={ScsUserWebisoCreate}
          show={ScsUserWebisoShow}
        />
        <Resource
          name="SearchTextTest"
          list={SearchTextTestList}
          edit={SearchTextTestEdit}
          create={SearchTextTestCreate}
          show={SearchTextTestShow}
        />
        <Resource
          name="SelfGender"
          list={SelfGenderList}
          edit={SelfGenderEdit}
          create={SelfGenderCreate}
          show={SelfGenderShow}
        />
        <Resource
          name="SemPreviousCourse"
          list={SemPreviousCourseList}
          edit={SemPreviousCourseEdit}
          create={SemPreviousCourseCreate}
          show={SemPreviousCourseShow}
        />
        <Resource
          name="SlateAppSchool"
          list={SlateAppSchoolList}
          edit={SlateAppSchoolEdit}
          create={SlateAppSchoolCreate}
          show={SlateAppSchoolShow}
        />
        <Resource
          name="SlateApp"
          list={SlateAppList}
          edit={SlateAppEdit}
          create={SlateAppCreate}
          show={SlateAppShow}
        />
        <Resource
          name="SlateAppsMseReviewed"
          list={SlateAppsMseReviewedList}
          edit={SlateAppsMseReviewedEdit}
          create={SlateAppsMseReviewedCreate}
          show={SlateAppsMseReviewedShow}
        />
        <Resource
          name="SlateAwAppId"
          list={SlateAwAppIdList}
          edit={SlateAwAppIdEdit}
          create={SlateAwAppIdCreate}
          show={SlateAwAppIdShow}
        />
        <Resource
          name="SlateCodility"
          list={SlateCodilityList}
          edit={SlateCodilityEdit}
          create={SlateCodilityCreate}
          show={SlateCodilityShow}
        />
        <Resource
          name="SlateEmail2AwUser"
          list={SlateEmail2AwUserList}
          edit={SlateEmail2AwUserEdit}
          create={SlateEmail2AwUserCreate}
          show={SlateEmail2AwUserShow}
        />
        <Resource
          name="SlateEmploy"
          list={SlateEmployList}
          edit={SlateEmployEdit}
          create={SlateEmployCreate}
          show={SlateEmployShow}
        />
        <Resource
          name="SlateIelt"
          list={SlateIeltList}
          edit={SlateIeltEdit}
          create={SlateIeltCreate}
          show={SlateIeltShow}
        />
        <Resource
          name="SlateLangCode"
          list={SlateLangCodeList}
          edit={SlateLangCodeEdit}
          create={SlateLangCodeCreate}
          show={SlateLangCodeShow}
        />
        <Resource
          name="SlateMaterial"
          list={SlateMaterialList}
          edit={SlateMaterialEdit}
          create={SlateMaterialCreate}
          show={SlateMaterialShow}
        />
        <Resource
          name="SlateOrg"
          list={SlateOrgList}
          edit={SlateOrgEdit}
          create={SlateOrgCreate}
          show={SlateOrgShow}
        />
        <Resource
          name="SlateOrgsAll"
          list={SlateOrgsAllList}
          edit={SlateOrgsAllEdit}
          create={SlateOrgsAllCreate}
          show={SlateOrgsAllShow}
        />
        <Resource
          name="SlateProgram"
          list={SlateProgramList}
          edit={SlateProgramEdit}
          create={SlateProgramCreate}
          show={SlateProgramShow}
        />
        <Resource
          name="SlateProgramsMseReviewed"
          list={SlateProgramsMseReviewedList}
          edit={SlateProgramsMseReviewedEdit}
          create={SlateProgramsMseReviewedCreate}
          show={SlateProgramsMseReviewedShow}
        />
        <Resource
          name="SlatePub"
          list={SlatePubList}
          edit={SlatePubEdit}
          create={SlatePubCreate}
          show={SlatePubShow}
        />
        <Resource
          name="SlateRecommend"
          list={SlateRecommendList}
          edit={SlateRecommendEdit}
          create={SlateRecommendCreate}
          show={SlateRecommendShow}
        />
        <Resource
          name="SlateRecommend1"
          list={SlateRecommend1List}
          edit={SlateRecommend1Edit}
          create={SlateRecommend1Create}
          show={SlateRecommend1Show}
        />
        <Resource
          name="SlateRecommend2"
          list={SlateRecommend2List}
          edit={SlateRecommend2Edit}
          create={SlateRecommend2Create}
          show={SlateRecommend2Show}
        />
        <Resource
          name="SlateRecommend3"
          list={SlateRecommend3List}
          edit={SlateRecommend3Edit}
          create={SlateRecommend3Create}
          show={SlateRecommend3Show}
        />
        <Resource
          name="SlateReview"
          list={SlateReviewList}
          edit={SlateReviewEdit}
          create={SlateReviewCreate}
          show={SlateReviewShow}
        />
        <Resource
          name="SlateSuppinfo"
          list={SlateSuppinfoList}
          edit={SlateSuppinfoEdit}
          create={SlateSuppinfoCreate}
          show={SlateSuppinfoShow}
        />
        <Resource
          name="SlateTestScore"
          list={SlateTestScoreList}
          edit={SlateTestScoreEdit}
          create={SlateTestScoreCreate}
          show={SlateTestScoreShow}
        />
        <Resource
          name="SlateToefl"
          list={SlateToeflList}
          edit={SlateToeflEdit}
          create={SlateToeflCreate}
          show={SlateToeflShow}
        />
        <Resource
          name="SpecialConsideration"
          list={SpecialConsiderationList}
          edit={SpecialConsiderationEdit}
          create={SpecialConsiderationCreate}
          show={SpecialConsiderationShow}
        />
        <Resource
          name="State"
          list={StateList}
          edit={StateEdit}
          create={StateCreate}
          show={StateShow}
        />
        <Resource
          name="StudentDecision"
          list={StudentDecisionList}
          edit={StudentDecisionEdit}
          create={StudentDecisionCreate}
          show={StudentDecisionShow}
        />
        <Resource
          name="StudentDecisionHistory"
          list={StudentDecisionHistoryList}
          edit={StudentDecisionHistoryEdit}
          create={StudentDecisionHistoryCreate}
          show={StudentDecisionHistoryShow}
        />
        <Resource
          name="StudentDecisionUniversity"
          list={StudentDecisionUniversityList}
          edit={StudentDecisionUniversityEdit}
          create={StudentDecisionUniversityCreate}
          show={StudentDecisionUniversityShow}
        />
        <Resource
          name="Systemenv"
          list={SystemenvList}
          edit={SystemenvEdit}
          create={SystemenvCreate}
          show={SystemenvShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="TagMember"
          list={TagMemberList}
          edit={TagMemberEdit}
          create={TagMemberCreate}
          show={TagMemberShow}
        />
        <Resource
          name="TagInstance"
          list={TagInstanceList}
          edit={TagInstanceEdit}
          create={TagInstanceCreate}
          show={TagInstanceShow}
        />
        <Resource
          name="TeachingExperience"
          list={TeachingExperienceList}
          edit={TeachingExperienceEdit}
          create={TeachingExperienceCreate}
          show={TeachingExperienceShow}
        />
        <Resource
          name="TesttableforBanshee"
          list={TesttableforBansheeList}
          edit={TesttableforBansheeEdit}
          create={TesttableforBansheeCreate}
          show={TesttableforBansheeShow}
        />
        <Resource
          name="TestusersInfo"
          list={TestusersInfoList}
          edit={TestusersInfoEdit}
          create={TestusersInfoCreate}
          show={TestusersInfoShow}
        />
        <Resource
          name="Toefl"
          list={ToeflList}
          edit={ToeflEdit}
          create={ToeflCreate}
          show={ToeflShow}
        />
        <Resource
          name="ToeflEssential"
          list={ToeflEssentialList}
          edit={ToeflEssentialEdit}
          create={ToeflEssentialCreate}
          show={ToeflEssentialShow}
        />
        <Resource
          name="ToeflItpPlus"
          list={ToeflItpPlusList}
          edit={ToeflItpPlusEdit}
          create={ToeflItpPlusCreate}
          show={ToeflItpPlusShow}
        />
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="UnitPeriod"
          list={UnitPeriodList}
          edit={UnitPeriodEdit}
          create={UnitPeriodCreate}
          show={UnitPeriodShow}
        />
        <Resource
          name="UnitRole"
          list={UnitRoleList}
          edit={UnitRoleEdit}
          create={UnitRoleCreate}
          show={UnitRoleShow}
        />
        <Resource
          name="UsHsStatus"
          list={UsHsStatusList}
          edit={UsHsStatusEdit}
          create={UsHsStatusCreate}
          show={UsHsStatusShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UsersInfo"
          list={UsersInfoList}
          edit={UsersInfoEdit}
          create={UsersInfoCreate}
          show={UsersInfoShow}
        />
        <Resource
          name="UsersOrig"
          list={UsersOrigList}
          edit={UsersOrigEdit}
          create={UsersOrigCreate}
          show={UsersOrigShow}
        />
        <Resource
          name="UsersRemoteAuthString"
          list={UsersRemoteAuthStringList}
          edit={UsersRemoteAuthStringEdit}
          create={UsersRemoteAuthStringCreate}
          show={UsersRemoteAuthStringShow}
        />
        <Resource
          name="Usersinst"
          list={UsersinstList}
          edit={UsersinstEdit}
          create={UsersinstCreate}
          show={UsersinstShow}
        />
        <Resource
          name="Usertype"
          list={UsertypeList}
          edit={UsertypeEdit}
          create={UsertypeCreate}
          show={UsertypeShow}
        />
        <Resource
          name="VeteranInfo"
          list={VeteranInfoList}
          edit={VeteranInfoEdit}
          create={VeteranInfoCreate}
          show={VeteranInfoShow}
        />
        <Resource
          name="VideoEssay"
          list={VideoEssayList}
          edit={VideoEssayEdit}
          create={VideoEssayCreate}
          show={VideoEssayShow}
        />
        <Resource
          name="Visatype"
          list={VisatypeList}
          edit={VisatypeEdit}
          create={VisatypeCreate}
          show={VisatypeShow}
        />
        <Resource
          name="Voucher"
          list={VoucherList}
          edit={VoucherEdit}
          create={VoucherCreate}
          show={VoucherShow}
        />
        <Resource
          name="VoucherApplication"
          list={VoucherApplicationList}
          edit={VoucherApplicationEdit}
          create={VoucherApplicationCreate}
          show={VoucherApplicationShow}
        />
        <Resource
          name="VoucherApplicationError"
          list={VoucherApplicationErrorList}
          edit={VoucherApplicationErrorEdit}
          create={VoucherApplicationErrorCreate}
          show={VoucherApplicationErrorShow}
        />
        <Resource
          name="VoucherProgram"
          list={VoucherProgramList}
          edit={VoucherProgramEdit}
          create={VoucherProgramCreate}
          show={VoucherProgramShow}
        />
        <Resource
          name="VoucherType"
          list={VoucherTypeList}
          edit={VoucherTypeEdit}
          create={VoucherTypeCreate}
          show={VoucherTypeShow}
        />
        <Resource
          name="WaiverApplication"
          list={WaiverApplicationList}
          edit={WaiverApplicationEdit}
          create={WaiverApplicationCreate}
          show={WaiverApplicationShow}
        />
        <Resource
          name="WaiverOrg"
          list={WaiverOrgList}
          edit={WaiverOrgEdit}
          create={WaiverOrgCreate}
          show={WaiverOrgShow}
        />
      </Admin>
    </div>
  );
};

export default App;
