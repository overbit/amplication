import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "./ApplicationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PROGRAMMODEL_TITLE_FIELD } from "../programModel/ProgramModelTitle";
import { MHCIPREREQSSTATUS_TITLE_FIELD } from "../mhciPrereqsStatus/MhciPrereqsStatusTitle";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { PAYMENTVOUCHER_TITLE_FIELD } from "../paymentVoucher/PaymentVoucherTitle";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";
import { ACOPAL_TITLE_FIELD } from "../acoPal/AcoPalTitle";
import { LUAPPLICATIONCOHORT_TITLE_FIELD } from "../luApplicationCohort/LuApplicationCohortTitle";
import { LUAPPLICATIONSTARTSEMESTER_TITLE_FIELD } from "../luApplicationStartSemester/LuApplicationStartSemesterTitle";
import { MSECODILITY_TITLE_FIELD } from "../mseCodility/MseCodilityTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Aco Pal" source="acopal.id" reference="AcoPal">
          <TextField source={ACOPAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Area1" source="area1" />
        <TextField label="Area2" source="area2" />
        <TextField label="Area3" source="area3" />
        <BooleanField label="Buckleywaive" source="buckleywaive" />
        <TextField label="Cnbc" source="cnbc" />
        <BooleanField label="Complete" source="complete" />
        <TextField label="Created Date" source="createdDate" />
        <TextField label="Cross Dept Progs" source="crossDeptProgs" />
        <TextField
          label="Cross Dept Progs Other"
          source="crossDeptProgsOther"
        />
        <BooleanField label="Cups" source="cups" />
        <TextField label="Cur Enrolled" source="curEnrolled" />
        <BooleanField label="Hide" source="hide" />
        <TextField label="Honors" source="honors" />
        <TextField label="Id" source="id" />
        <TextField label="Invitation Email Sent" source="invitationEmailSent" />
        <ReferenceField
          label="Lu Application Cohort"
          source="luapplicationcohort.id"
          reference="LuApplicationCohort"
        >
          <TextField source={LUAPPLICATIONCOHORT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Lu Application Start Semester"
          source="luapplicationstartsemester.id"
          reference="LuApplicationStartSemester"
        >
          <TextField source={LUAPPLICATIONSTARTSEMESTER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField
          label="Masters Review Waiver"
          source="mastersReviewWaiver"
        />
        <ReferenceField
          label="Mse Codility"
          source="msecodility.id"
          reference="MseCodility"
        >
          <TextField source={MSECODILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Notificationsent" source="notificationsent" />
        <TextField label="Other Inst" source="otherInst" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Paymentamount" source="paymentamount" />
        <TextField label="Paymentdate" source="paymentdate" />
        <TextField label="Paymenttype" source="paymenttype" />
        <BooleanField label="Pier" source="pier" />
        <TextField label="Portfolio Link" source="portfolioLink" />
        <TextField label="Portfolio Password" source="portfolioPassword" />
        <BooleanField label="Portfoliosubmitted" source="portfoliosubmitted" />
        <TextField label="Previous Coursework" source="previousCoursework" />
        <TextField label="Records Permission" source="recordsPermission" />
        <TextField label="Recruiting Event" source="recruitingEvent" />
        <TextField label="Referral To Program" source="referralToProgram" />
        <TextField label="Rejection Sent" source="rejectionSent" />
        <TextField label="Round2" source="round2" />
        <TextField label="Round3" source="round3" />
        <TextField label="Sent To Program" source="sentToProgram" />
        <TextField label="Statementofpurpose" source="statementofpurpose" />
        <BooleanField label="Student Commit" source="studentCommit" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Submitted Date" source="submittedDate" />
        <TextField label="User Id" source="userId" />
        <TextField label="Waitlist Sent" source="waitlistSent" />
        <BooleanField label="Waive" source="waive" />
        <TextField label="Waivedate" source="waivedate" />
        <TextField label="Waive Higher Fee" source="waiveHigherFee" />
        <TextField label="Waive Toefl" source="waiveToefl" />
        <BooleanField label="Womenfellowship" source="womenfellowship" />
        <ReferenceManyField
          reference="ApplicationAdminNote"
          target="application_id"
          label="ApplicationAdminNotes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <DateField source="insertTime" label="Insert Time" />
            <TextField label="Note" source="note" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendance"
          target="application_id"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CashnetPayment"
          target="app_id"
          label="CashnetPayments"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="Applicant Email" source="applicantEmail" />
            <TextField label="Applicant Name" source="applicantName" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Merchant" source="merchant" />
            <TextField label="Status" source="status" />
            <TextField label="Transaction Id" source="transactionId" />
            <DateField source="transactionTime" label="Transaction Time" />
            <TextField label="Transaction Type" source="transactionType" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Experience"
          target="application_id"
          label="Experiences"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Company" source="company" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Experiencetype" source="experiencetype" />
            <TextField label="Id" source="id" />
            <TextField label="Job Description" source="jobDescription" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="Order Entered" source="orderEntered" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Years Exp" source="yearsExp" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Fellowship"
          target="application_id"
          label="Fellowships"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Applied Date" source="appliedDate" />
            <TextField label="Award Date" source="awardDate" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Duration" source="duration" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Short" source="short" />
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Gmatscore"
          target="application_id"
          label="Gmatscores"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Analyticalwritingpercentile"
              source="analyticalwritingpercentile"
            />
            <TextField
              label="Analyticalwritingscore"
              source="analyticalwritingscore"
            />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Id" source="id" />
            <TextField
              label="Quantitativepercentile"
              source="quantitativepercentile"
            />
            <TextField label="Quantitativescore" source="quantitativescore" />
            <BooleanField label="Scorereceived" source="scorereceived" />
            <TextField label="Testdate" source="testdate" />
            <TextField label="Totalpercentile" source="totalpercentile" />
            <TextField label="Totalscore" source="totalscore" />
            <TextField label="Verbalpercentile" source="verbalpercentile" />
            <TextField label="Verbalscore" source="verbalscore" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Gresubjectscore"
          target="application_id"
          label="Gresubjectscores"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Gre Sub Email" source="greSubEmail" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Percentile" source="percentile" />
            <TextField label="Score" source="score" />
            <BooleanField label="Scorereceived" source="scorereceived" />
            <TextField label="Testdate" source="testdate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ieltsscore"
          target="application_id"
          label="Ieltsscores"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Id" source="id" />
            <TextField label="Listeningscore" source="listeningscore" />
            <TextField label="Overallscore" source="overallscore" />
            <TextField label="Readingscore" source="readingscore" />
            <TextField label="Scorereceived" source="scorereceived" />
            <TextField label="Speakingscore" source="speakingscore" />
            <TextField label="Testdate" source="testdate" />
            <TextField label="Test Email" source="testEmail" />
            <TextField label="Writingscore" source="writingscore" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationAdvisor"
          target="application_id"
          label="LuApplicationAdvisors"
        >
          <Datagrid rowClick="show">
            <TextField label="Advisor Type" source="advisorType" />
            <TextField label="Advisor User Id" source="advisorUserId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Choice" source="choice" />
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Program Id" source="programId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationAppreq"
          target="application_id"
          label="LuApplicationAppreqs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Completed" source="completed" />
            <TextField label="Id" source="id" />
            <DateField source="lastModified" label="Last Modified" />
            <TextField label="Req Id" source="reqId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationGroup"
          target="application_id"
          label="LuApplicationGroups"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Group Id" source="groupId" />
            <TextField label="Id" source="id" />
            <TextField label="Round" source="round" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationProgram"
          target="application_id"
          label="LuApplicationPrograms"
        >
          <Datagrid rowClick="show">
            <TextField label="Admission Status" source="admissionStatus" />
            <TextField label="Admit" source="admit" />
            <TextField label="Admit Comments" source="admitComments" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Choice" source="choice" />
            <TextField label="Decision" source="decision" />
            <TextField label="Faccontact" source="faccontact" />
            <TextField label="Id" source="id" />
            <TextField label="Ltichoice" source="ltichoice" />
            <TextField label="Msecertchoice" source="msecertchoice" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Round2" source="round2" />
            <TextField label="Scholarship Amt" source="scholarshipAmt" />
            <TextField
              label="Scholarship Comments"
              source="scholarshipComments"
            />
            <TextField label="Stucontact" source="stucontact" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereq"
          target="application_id"
          label="MhciPrereqs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Mhci Prereqs Status"
              source="mhciprereqsstatus.id"
              reference="MhciPrereqsStatus"
            >
              <TextField source={MHCIPREREQSSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Period Id" source="periodId" />
            <TextField label="Prereq Type" source="prereq_type" />
            <TextField label="Status2" source="status2" />
            <TextField label="Student Assessment" source="student_assessment" />
            <TextField
              label="Student Lu Users Usertypes Id"
              source="studentLuUsersUsertypesId"
            />
            <DateField source="timestamp" label="Timestamp" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsCourse"
          target="application_id"
          label="MhciPrereqsCourses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Course Type" source="course_type" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <TextField
              label="Student Course Grade"
              source="studentCourseGrade"
            />
            <TextField
              label="Student Course Institution"
              source="studentCourseInstitution"
            />
            <TextField label="Student Course Name" source="studentCourseName" />
            <TextField label="Student Course Time" source="studentCourseTime" />
            <TextField
              label="Submitted To Reviewer"
              source="submittedToReviewer"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MlArea"
          target="application_id"
          label="MlAreas"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Area" source="area" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MlSupportingCoursework"
          target="app_id"
          label="MlSupportingCourseworks"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Intro Course2 Grade" source="introCourse2Grade" />
            <TextField label="Intro Course2 Num" source="introCourse2Num" />
            <TextField
              label="Intro Course2 Semester"
              source="introCourse2Semester"
            />
            <TextField label="Intro Course Grade" source="introCourseGrade" />
            <TextField label="Intro Course Num" source="introCourseNum" />
            <TextField
              label="Intro Course Semester"
              source="introCourseSemester"
            />
            <TextField label="Ml1 Course Grade" source="ml1CourseGrade" />
            <TextField label="Ml1 Course Num" source="ml1CourseNum" />
            <TextField label="Ml1 Course Semester" source="ml1CourseSemester" />
            <TextField label="Ml2 Course Grade" source="ml2CourseGrade" />
            <TextField label="Ml2 Course Num" source="ml2CourseNum" />
            <TextField label="Ml2 Course Semester" source="ml2CourseSemester" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MseAqa"
          target="application_id"
          label="MseAqas"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="English Comments" source="englishComments" />
            <TextField label="English Rating" source="englishRating" />
            <TextField
              label="Experience Comments"
              source="experienceComments"
            />
            <TextField label="Experience Rating" source="experienceRating" />
            <TextField
              label="Foundational Comments"
              source="foundationalComments"
            />
            <TextField
              label="Foundational Rating"
              source="foundationalRating"
            />
            <TextField label="Id" source="id" />
            <TextField label="Maturity Comments" source="maturityComments" />
            <TextField label="Maturity Rating" source="maturityRating" />
            <TextField
              label="Programming Comments"
              source="programmingComments"
            />
            <TextField label="Programming Rating" source="programmingRating" />
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField
              label="Understanding Comments"
              source="understandingComments"
            />
            <TextField
              label="Understanding Rating"
              source="understandingRating"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="application_id"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <DateField source="lastModTime" label="Last Mod Time" />
            <TextField label="Last Mod User Id" source="lastModUserId" />
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Id" source="paymentId" />
            <TextField label="Payment Intent Date" source="paymentIntentDate" />
            <TextField label="Payment Status" source="payment_status" />
            <TextField label="Payment Type" source="paymentType" />
            <ReferenceField
              label="Payment Voucher"
              source="paymentvoucher.id"
              reference="PaymentVoucher"
            >
              <TextField source={PAYMENTVOUCHER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PeriodApplication"
          target="application_id"
          label="PeriodApplications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PromotionHistory"
          target="application_id"
          label="PromotionHistories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Program Id" source="programId" />
            <TextField label="Promotion Method" source="promotion_method" />
            <TextField label="Round" source="round" />
            <DateField source="statusTime" label="Status Time" />
            <TextField label="Users Id" source="usersId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Publication"
          target="application_id"
          label="Publications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Author" source="author" />
            <TextField label="Citation" source="citation" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Forum" source="forum" />
            <TextField label="Id" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Title" source="title" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Type Other" source="typeOther" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Recommend"
          target="application_id"
          label="Recommends"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Buckleyatupload" source="buckleyatupload" />
            <TextField label="Cmu Affiliation" source="cmuAffiliation" />
            <TextField label="Content" source="content" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Id" source="id" />
            <TextField label="Last Reminder Sent" source="lastReminderSent" />
            <TextField label="Recommendtype" source="recommendtype" />
            <TextField label="Rec User Id" source="recUserId" />
            <TextField label="Reminder Sent Count" source="reminderSentCount" />
            <BooleanField label="Submitted" source="submitted" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RegistrationFeePayment"
          target="application_id"
          label="RegistrationFeePayments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Id" source="id" />
            <DateField source="lastModTime" label="Last Mod Time" />
            <TextField label="Last Mod User Id" source="lastModUserId" />
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Intent Date" source="paymentIntentDate" />
            <TextField label="Payment Status" source="payment_status" />
            <TextField label="Payment Type" source="paymentType" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RegistrationFeeStatus"
          target="application_id"
          label="RegistrationFeeStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Id" source="id" />
            <BooleanField label="Paid" source="paid" />
            <BooleanField label="Waived" source="waived" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="application_id"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Admit Vote" source="admitVote" />
            <TextField label="Advise Time" source="adviseTime" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Background" source="background" />
            <TextField label="Brilliance" source="brilliance" />
            <TextField label="Comments" source="comments" />
            <TextField label="Commit Money" source="commitMoney" />
            <TextField label="Committee Vote" source="committeeVote" />
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Fac Vote" source="facVote" />
            <TextField label="Fund Source" source="fundSource" />
            <TextField label="Grades" source="grades" />
            <TextField label="Grad Name" source="gradName" />
            <TextField label="Id" source="id" />
            <TextField label="Impressed" source="impressed" />
            <TextField label="Interview" source="interview" />
            <TextField label="Mse Experience Len" source="mseExperienceLen" />
            <TextField label="Other Interest" source="otherInterest" />
            <TextField label="Pertinent Info" source="pertinentInfo" />
            <TextField label="Point" source="point" />
            <TextField label="Point2" source="point2" />
            <TextField label="Point2 Certainty" source="point2Certainty" />
            <TextField label="Point Certainty" source="pointCertainty" />
            <TextField label="Private Comments" source="privateComments" />
            <TextField label="Publications" source="publications" />
            <TextField label="Recommendations" source="recommendations" />
            <BooleanField label="Recruited" source="recruited" />
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField label="Round" source="round" />
            <TextField label="Round2" source="round2" />
            <TextField label="Round3" source="round3" />
            <TextField label="Rrank" source="rrank" />
            <TextField label="Statement" source="statement" />
            <TextField
              label="Supplemental Review"
              source="supplementalReview"
            />
            <TextField label="Touched" source="touched" />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RissFunding"
          target="application_id"
          label="RissFundings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Direct Funding" source="directFunding" />
            <TextField label="External Amount" source="externalAmount" />
            <BooleanField label="External Funding" source="externalFunding" />
            <TextField label="External Source" source="externalSource" />
            <TextField label="Id" source="id" />
            <BooleanField label="Reu Scholarship" source="reuScholarship" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RissMcnair"
          target="appId"
          label="RissMcnairs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Contact" source="contact" />
            <TextField label="Id" source="id" />
            <TextField label="Site" source="site" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SpecialConsideration"
          target="application_id"
          label="SpecialConsiderations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField
              label="Special Consideration"
              source="specialConsideration"
            />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDecision"
          target="application_id"
          label="StudentDecisions"
        >
          <Datagrid rowClick="show">
            <TextField label="Accept Reasons" source="acceptReasons" />
            <TextField label="Admin" source="admin" />
            <BooleanField label="Affiliated Cmu" source="affiliatedCmu" />
            <TextField label="Affiliated Cmutxt" source="affiliatedCmutxt" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Asian" source="asian" />
            <TextField label="Attend Acc" source="attendAcc" />
            <TextField label="Black" source="black" />
            <TextField label="Cau" source="cau" />
            <TextField label="Cit Country" source="citCountry" />
            <TextField label="City P" source="cityP" />
            <TextField label="Country P" source="countryP" />
            <TextField label="Decision" source="decision" />
            <TextField label="Decision Reasons" source="decisionReasons" />
            <TextField label="Deferral Reasons" source="deferralReasons" />
            <TextField label="Deferral Semester" source="deferralSemester" />
            <TextField label="Deferral Year" source="deferralYear" />
            <TextField label="Dob" source="dob" />
            <TextField label="Done Diff" source="doneDiff" />
            <TextField label="Errors" source="errors" />
            <TextField label="Gender" source="gender" />
            <TextField label="Gender Other" source="genderOther" />
            <TextField label="Hispanic" source="hispanic" />
            <TextField label="Hpi" source="hpi" />
            <TextField label="Id" source="id" />
            <TextField label="Legal Name" source="legalName" />
            <TextField label="Marital Other" source="maritalOther" />
            <TextField label="Marital Status" source="maritalStatus" />
            <TextField label="Nat Am" source="natAm" />
            <TextField label="Opt Comm" source="optComm" />
            <TextField label="Other Choice" source="otherChoice" />
            <TextField
              label="Other Choice Location"
              source="otherChoiceLocation"
            />
            <TextField
              label="Other Schools Accepted"
              source="otherSchoolsAccepted"
            />
            <TextField
              label="Other Schools Applied"
              source="otherSchoolsApplied"
            />
            <TextField label="Postal P" source="postalP" />
            <TextField label="Pref Email" source="prefEmail" />
            <TextField label="Pref Name" source="prefName" />
            <TextField label="Prog Length" source="progLength" />
            <TextField label="Program Id" source="programId" />
            <TextField label="Pronoun" source="pronoun" />
            <TextField label="Pronoun Other" source="pronounOther" />
            <TextField label="State P" source="stateP" />
            <TextField label="Street P1" source="streetP1" />
            <TextField label="Street P2" source="streetP2" />
            <TextField label="Street P3" source="streetP3" />
            <TextField label="Street P4" source="streetP4" />
            <BooleanField label="Submitted" source="submitted" />
            <DateField source="submittedDate" label="Submitted Date" />
            <TextField label="Tel Mobile" source="telMobile" />
            <BooleanField label="Visit" source="visit" />
            <TextField label="Visit Comments" source="visitComments" />
            <BooleanField label="Visit Helpful" source="visitHelpful" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDecisionHistory"
          target="application_id"
          label="StudentDecisionHistories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Decision" source="decision" />
            <TextField label="Deferral Semester" source="deferralSemester" />
            <TextField label="Deferral Year" source="deferralYear" />
            <TextField label="Id" source="id" />
            <DateField source="insertDate" label="Insert Date" />
            <TextField label="Program Id" source="programId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagMember"
          target="appId"
          label="TagMembers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Tag Instance Id" source="tagInstanceId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
