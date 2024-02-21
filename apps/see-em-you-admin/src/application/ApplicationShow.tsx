import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
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
        <TextField label="User Id" source="userId" />
        <TextField label="Name" source="name" />
        <TextField label="Submitted Date" source="submittedDate" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Created Date" source="createdDate" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Paymentdate" source="paymentdate" />
        <TextField label="Paymentamount" source="paymentamount" />
        <TextField label="Paymenttype" source="paymenttype" />
        <BooleanField label="Waive" source="waive" />
        <TextField label="Waivedate" source="waivedate" />
        <BooleanField label="Complete" source="complete" />
        <TextField label="Statementofpurpose" source="statementofpurpose" />
        <TextField label="Notificationsent" source="notificationsent" />
        <BooleanField label="Student Commit" source="studentCommit" />
        <BooleanField label="Cups" source="cups" />
        <BooleanField label="Womenfellowship" source="womenfellowship" />
        <BooleanField label="Pier" source="pier" />
        <TextField label="Cnbc" source="cnbc" />
        <BooleanField label="Portfoliosubmitted" source="portfoliosubmitted" />
        <TextField label="Portfolio Link" source="portfolioLink" />
        <TextField label="Portfolio Password" source="portfolioPassword" />
        <TextField label="Area1" source="area1" />
        <TextField label="Area2" source="area2" />
        <TextField label="Area3" source="area3" />
        <BooleanField label="Buckleywaive" source="buckleywaive" />
        <TextField label="Referral To Program" source="referralToProgram" />
        <TextField label="Recruiting Event" source="recruitingEvent" />
        <TextField label="Other Inst" source="otherInst" />
        <TextField label="Cross Dept Progs" source="crossDeptProgs" />
        <TextField
          label="Cross Dept Progs Other"
          source="crossDeptProgsOther"
        />
        <TextField label="Records Permission" source="recordsPermission" />
        <BooleanField
          label="Masters Review Waiver"
          source="mastersReviewWaiver"
        />
        <TextField label="Sent To Program" source="sentToProgram" />
        <TextField label="Cur Enrolled" source="curEnrolled" />
        <TextField label="Honors" source="honors" />
        <TextField label="Round2" source="round2" />
        <TextField label="Round3" source="round3" />
        <TextField label="Rejection Sent" source="rejectionSent" />
        <TextField label="Waitlist Sent" source="waitlistSent" />
        <TextField label="Previous Coursework" source="previousCoursework" />
        <BooleanField label="Hide" source="hide" />
        <TextField label="Waive Higher Fee" source="waiveHigherFee" />
        <TextField label="Invitation Email Sent" source="invitationEmailSent" />
        <TextField label="Waive Toefl" source="waiveToefl" />
        <ReferenceField label="Aco Pal" source="acopal.id" reference="AcoPal">
          <TextField source={ACOPAL_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceField
          label="Mse Codility"
          source="msecodility.id"
          reference="MseCodility"
        >
          <TextField source={MSECODILITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="ApplicationAdminNote"
          target="application_id"
          label="ApplicationAdminNotes"
        >
          <Datagrid rowClick="show">
            <DateField source="insertTime" label="Insert Time" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendance"
          target="application_id"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CashnetPayment"
          target="app_id"
          label="CashnetPayments"
        >
          <Datagrid rowClick="show">
            <TextField label="Transaction Id" source="transactionId" />
            <TextField label="Applicant Name" source="applicantName" />
            <TextField label="Applicant Email" source="applicantEmail" />
            <TextField label="Merchant" source="merchant" />
            <TextField label="Status" source="status" />
            <DateField source="transactionTime" label="Transaction Time" />
            <TextField label="Transaction Type" source="transactionType" />
            <TextField label="Amount" source="amount" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Experience"
          target="application_id"
          label="Experiences"
        >
          <Datagrid rowClick="show">
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Experiencetype" source="experiencetype" />
            <TextField label="Order Entered" source="orderEntered" />
            <TextField label="Company" source="company" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Years Exp" source="yearsExp" />
            <TextField label="Address" source="address" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="Job Description" source="jobDescription" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Fellowship"
          target="application_id"
          label="Fellowships"
        >
          <Datagrid rowClick="show">
            <TextField label="Name" source="name" />
            <TextField label="Amount" source="amount" />
            <TextField label="Status" source="status" />
            <TextField label="Applied Date" source="appliedDate" />
            <TextField label="Award Date" source="awardDate" />
            <TextField label="Duration" source="duration" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Short" source="short" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Gmatscore"
          target="application_id"
          label="Gmatscores"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Scorereceived" source="scorereceived" />
            <TextField label="Testdate" source="testdate" />
            <TextField label="Verbalscore" source="verbalscore" />
            <TextField label="Verbalpercentile" source="verbalpercentile" />
            <TextField label="Quantitativescore" source="quantitativescore" />
            <TextField
              label="Quantitativepercentile"
              source="quantitativepercentile"
            />
            <TextField label="Totalscore" source="totalscore" />
            <TextField label="Totalpercentile" source="totalpercentile" />
            <TextField
              label="Analyticalwritingscore"
              source="analyticalwritingscore"
            />
            <TextField
              label="Analyticalwritingpercentile"
              source="analyticalwritingpercentile"
            />
            <TextField label="Datafile Id" source="datafileId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Gresubjectscore"
          target="application_id"
          label="Gresubjectscores"
        >
          <Datagrid rowClick="show">
            <TextField label="Testdate" source="testdate" />
            <TextField label="Name" source="name" />
            <TextField label="Score" source="score" />
            <TextField label="Percentile" source="percentile" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Gre Sub Email" source="greSubEmail" />
            <BooleanField label="Scorereceived" source="scorereceived" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ieltsscore"
          target="application_id"
          label="Ieltsscores"
        >
          <Datagrid rowClick="show">
            <TextField label="Testdate" source="testdate" />
            <TextField label="Listeningscore" source="listeningscore" />
            <TextField label="Readingscore" source="readingscore" />
            <TextField label="Writingscore" source="writingscore" />
            <TextField label="Speakingscore" source="speakingscore" />
            <TextField label="Overallscore" source="overallscore" />
            <TextField label="Scorereceived" source="scorereceived" />
            <TextField label="Datafile Id" source="datafileId" />
            <TextField label="Test Email" source="testEmail" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationAdvisor"
          target="application_id"
          label="LuApplicationAdvisors"
        >
          <Datagrid rowClick="show">
            <TextField label="Advisor User Id" source="advisorUserId" />
            <TextField label="Advisor Type" source="advisorType" />
            <TextField label="Name" source="name" />
            <TextField label="Program Id" source="programId" />
            <TextField label="Choice" source="choice" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationAppreq"
          target="application_id"
          label="LuApplicationAppreqs"
        >
          <Datagrid rowClick="show">
            <TextField label="Req Id" source="reqId" />
            <DateField source="lastModified" label="Last Modified" />
            <BooleanField label="Completed" source="completed" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationGroup"
          target="application_id"
          label="LuApplicationGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Group Id" source="groupId" />
            <TextField label="Round" source="round" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LuApplicationProgram"
          target="application_id"
          label="LuApplicationPrograms"
        >
          <Datagrid rowClick="show">
            <TextField label="Choice" source="choice" />
            <TextField label="Round2" source="round2" />
            <TextField label="Decision" source="decision" />
            <TextField label="Admission Status" source="admissionStatus" />
            <TextField label="Admit" source="admit" />
            <TextField label="Admit Comments" source="admitComments" />
            <TextField label="Faccontact" source="faccontact" />
            <TextField label="Stucontact" source="stucontact" />
            <TextField label="Scholarship Amt" source="scholarshipAmt" />
            <TextField
              label="Scholarship Comments"
              source="scholarshipComments"
            />
            <TextField label="Ltichoice" source="ltichoice" />
            <TextField label="Msecertchoice" source="msecertchoice" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereq"
          target="application_id"
          label="MhciPrereqs"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Student Lu Users Usertypes Id"
              source="studentLuUsersUsertypesId"
            />
            <TextField label="Prereq Type" source="prereq_type" />
            <TextField label="Period Id" source="periodId" />
            <TextField label="Student Assessment" source="student_assessment" />
            <TextField label="Status2" source="status2" />
            <DateField source="timestamp" label="Timestamp" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Mhci Prereqs Status"
              source="mhciprereqsstatus.id"
              reference="MhciPrereqsStatus"
            >
              <TextField source={MHCIPREREQSSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MhciPrereqsCourse"
          target="application_id"
          label="MhciPrereqsCourses"
        >
          <Datagrid rowClick="show">
            <TextField label="Course Type" source="course_type" />
            <TextField label="Student Course Name" source="studentCourseName" />
            <TextField label="Student Course Time" source="studentCourseTime" />
            <TextField
              label="Student Course Institution"
              source="studentCourseInstitution"
            />
            <TextField
              label="Student Course Grade"
              source="studentCourseGrade"
            />
            <TextField
              label="Submitted To Reviewer"
              source="submittedToReviewer"
            />
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MlArea"
          target="application_id"
          label="MlAreas"
        >
          <Datagrid rowClick="show">
            <TextField label="Area" source="area" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MlSupportingCoursework"
          target="app_id"
          label="MlSupportingCourseworks"
        >
          <Datagrid rowClick="show">
            <TextField label="Intro Course Num" source="introCourseNum" />
            <TextField
              label="Intro Course Semester"
              source="introCourseSemester"
            />
            <TextField label="Intro Course Grade" source="introCourseGrade" />
            <TextField label="Intro Course2 Num" source="introCourse2Num" />
            <TextField
              label="Intro Course2 Semester"
              source="introCourse2Semester"
            />
            <TextField label="Intro Course2 Grade" source="introCourse2Grade" />
            <TextField label="Ml1 Course Num" source="ml1CourseNum" />
            <TextField label="Ml1 Course Semester" source="ml1CourseSemester" />
            <TextField label="Ml1 Course Grade" source="ml1CourseGrade" />
            <TextField label="Ml2 Course Num" source="ml2CourseNum" />
            <TextField label="Ml2 Course Semester" source="ml2CourseSemester" />
            <TextField label="Ml2 Course Grade" source="ml2CourseGrade" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MseAqa"
          target="application_id"
          label="MseAqas"
        >
          <Datagrid rowClick="show">
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField label="English Comments" source="englishComments" />
            <TextField
              label="Programming Comments"
              source="programmingComments"
            />
            <TextField
              label="Foundational Comments"
              source="foundationalComments"
            />
            <TextField label="Maturity Comments" source="maturityComments" />
            <TextField
              label="Understanding Comments"
              source="understandingComments"
            />
            <TextField
              label="Experience Comments"
              source="experienceComments"
            />
            <TextField label="English Rating" source="englishRating" />
            <TextField label="Programming Rating" source="programmingRating" />
            <TextField
              label="Foundational Rating"
              source="foundationalRating"
            />
            <TextField label="Maturity Rating" source="maturityRating" />
            <TextField
              label="Understanding Rating"
              source="understandingRating"
            />
            <TextField label="Experience Rating" source="experienceRating" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="application_id"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="Payment Id" source="paymentId" />
            <TextField label="Payment Type" source="paymentType" />
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Intent Date" source="paymentIntentDate" />
            <TextField label="Payment Status" source="payment_status" />
            <DateField source="lastModTime" label="Last Mod Time" />
            <TextField label="Last Mod User Id" source="lastModUserId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Payment Voucher"
              source="paymentvoucher.id"
              reference="PaymentVoucher"
            >
              <TextField source={PAYMENTVOUCHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
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
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PromotionHistory"
          target="application_id"
          label="PromotionHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="Program Id" source="programId" />
            <DateField source="statusTime" label="Status Time" />
            <TextField label="Round" source="round" />
            <TextField label="Promotion Method" source="promotion_method" />
            <TextField label="Users Id" source="usersId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Publication"
          target="application_id"
          label="Publications"
        >
          <Datagrid rowClick="show">
            <TextField label="Title" source="title" />
            <TextField label="Author" source="author" />
            <TextField label="Forum" source="forum" />
            <TextField label="Citation" source="citation" />
            <TextField label="Url" source="url" />
            <TextField label="Status" source="status" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Type Other" source="typeOther" />
            <TextField label="Datafile Id" source="datafileId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Recommend"
          target="application_id"
          label="Recommends"
        >
          <Datagrid rowClick="show">
            <TextField label="Rec User Id" source="recUserId" />
            <TextField label="Recommendtype" source="recommendtype" />
            <TextField label="Content" source="content" />
            <TextField label="Datafile Id" source="datafileId" />
            <BooleanField label="Submitted" source="submitted" />
            <TextField label="Reminder Sent Count" source="reminderSentCount" />
            <TextField label="Last Reminder Sent" source="lastReminderSent" />
            <TextField label="Cmu Affiliation" source="cmuAffiliation" />
            <TextField label="Buckleyatupload" source="buckleyatupload" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RegistrationFeePayment"
          target="application_id"
          label="RegistrationFeePayments"
        >
          <Datagrid rowClick="show">
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Payment Type" source="paymentType" />
            <TextField label="Payment Amount" source="paymentAmount" />
            <TextField label="Payment Intent Date" source="paymentIntentDate" />
            <TextField label="Payment Status" source="payment_status" />
            <DateField source="lastModTime" label="Last Mod Time" />
            <TextField label="Last Mod User Id" source="lastModUserId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RegistrationFeeStatus"
          target="application_id"
          label="RegistrationFeeStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Amount" source="amount" />
            <BooleanField label="Paid" source="paid" />
            <BooleanField label="Waived" source="waived" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="application_id"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField label="Background" source="background" />
            <TextField label="Grades" source="grades" />
            <TextField label="Statement" source="statement" />
            <TextField label="Comments" source="comments" />
            <TextField label="Point" source="point" />
            <TextField label="Point Certainty" source="pointCertainty" />
            <TextField label="Point2" source="point2" />
            <TextField label="Point2 Certainty" source="point2Certainty" />
            <TextField label="Private Comments" source="privateComments" />
            <TextField label="Round2" source="round2" />
            <TextField label="Round3" source="round3" />
            <TextField label="Touched" source="touched" />
            <TextField label="Admit Vote" source="admitVote" />
            <BooleanField label="Recruited" source="recruited" />
            <TextField label="Grad Name" source="gradName" />
            <TextField label="Pertinent Info" source="pertinentInfo" />
            <TextField label="Advise Time" source="adviseTime" />
            <TextField label="Commit Money" source="commitMoney" />
            <TextField label="Fund Source" source="fundSource" />
            <TextField label="Round" source="round" />
            <TextField label="Interview" source="interview" />
            <TextField label="Recommendations" source="recommendations" />
            <TextField label="Publications" source="publications" />
            <TextField label="Brilliance" source="brilliance" />
            <TextField label="Other Interest" source="otherInterest" />
            <TextField
              label="Supplemental Review"
              source="supplementalReview"
            />
            <TextField label="Fac Vote" source="facVote" />
            <TextField label="Committee Vote" source="committeeVote" />
            <TextField label="Rrank" source="rrank" />
            <TextField label="Department Id" source="departmentId" />
            <TextField label="Mse Experience Len" source="mseExperienceLen" />
            <TextField label="Impressed" source="impressed" />
            <DateField source="updated" label="Updated" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RissFunding"
          target="application_id"
          label="RissFundings"
        >
          <Datagrid rowClick="show">
            <BooleanField label="External Funding" source="externalFunding" />
            <TextField label="External Source" source="externalSource" />
            <TextField label="External Amount" source="externalAmount" />
            <BooleanField label="Reu Scholarship" source="reuScholarship" />
            <BooleanField label="Direct Funding" source="directFunding" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RissMcnair"
          target="appId"
          label="RissMcnairs"
        >
          <Datagrid rowClick="show">
            <TextField label="Site" source="site" />
            <TextField label="Contact" source="contact" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SpecialConsideration"
          target="application_id"
          label="SpecialConsiderations"
        >
          <Datagrid rowClick="show">
            <TextField label="Reviewer Id" source="reviewerId" />
            <TextField
              label="Special Consideration"
              source="specialConsideration"
            />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDecision"
          target="application_id"
          label="StudentDecisions"
        >
          <Datagrid rowClick="show">
            <TextField label="Program Id" source="programId" />
            <TextField label="Decision" source="decision" />
            <TextField label="Accept Reasons" source="acceptReasons" />
            <TextField label="Other Choice" source="otherChoice" />
            <TextField
              label="Other Choice Location"
              source="otherChoiceLocation"
            />
            <TextField label="Decision Reasons" source="decisionReasons" />
            <BooleanField label="Visit" source="visit" />
            <TextField label="Visit Comments" source="visitComments" />
            <TextField
              label="Other Schools Applied"
              source="otherSchoolsApplied"
            />
            <TextField
              label="Other Schools Accepted"
              source="otherSchoolsAccepted"
            />
            <BooleanField label="Submitted" source="submitted" />
            <DateField source="submittedDate" label="Submitted Date" />
            <BooleanField label="Visit Helpful" source="visitHelpful" />
            <TextField label="Marital Status" source="maritalStatus" />
            <TextField label="Marital Other" source="maritalOther" />
            <BooleanField label="Affiliated Cmu" source="affiliatedCmu" />
            <TextField label="Prog Length" source="progLength" />
            <TextField label="Attend Acc" source="attendAcc" />
            <TextField label="Legal Name" source="legalName" />
            <TextField label="Pref Name" source="prefName" />
            <TextField label="Pref Email" source="prefEmail" />
            <TextField label="Dob" source="dob" />
            <TextField label="Gender" source="gender" />
            <TextField label="Gender Other" source="genderOther" />
            <TextField label="Tel Mobile" source="telMobile" />
            <TextField label="Street P1" source="streetP1" />
            <TextField label="Street P2" source="streetP2" />
            <TextField label="Street P3" source="streetP3" />
            <TextField label="Street P4" source="streetP4" />
            <TextField label="City P" source="cityP" />
            <TextField label="State P" source="stateP" />
            <TextField label="Postal P" source="postalP" />
            <TextField label="Country P" source="countryP" />
            <TextField label="Cit Country" source="citCountry" />
            <TextField label="Hispanic" source="hispanic" />
            <TextField label="Nat Am" source="natAm" />
            <TextField label="Black" source="black" />
            <TextField label="Asian" source="asian" />
            <TextField label="Hpi" source="hpi" />
            <TextField label="Cau" source="cau" />
            <TextField label="Done Diff" source="doneDiff" />
            <TextField label="Admin" source="admin" />
            <TextField label="Opt Comm" source="optComm" />
            <TextField label="Errors" source="errors" />
            <TextField label="Deferral Reasons" source="deferralReasons" />
            <TextField label="Deferral Semester" source="deferralSemester" />
            <TextField label="Deferral Year" source="deferralYear" />
            <TextField label="Pronoun" source="pronoun" />
            <TextField label="Pronoun Other" source="pronounOther" />
            <TextField label="Affiliated Cmutxt" source="affiliatedCmutxt" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDecisionHistory"
          target="application_id"
          label="StudentDecisionHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="Program Id" source="programId" />
            <TextField label="Decision" source="decision" />
            <TextField label="Deferral Semester" source="deferralSemester" />
            <TextField label="Deferral Year" source="deferralYear" />
            <DateField source="insertDate" label="Insert Date" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagMember"
          target="appId"
          label="TagMembers"
        >
          <Datagrid rowClick="show">
            <TextField label="Tag Instance Id" source="tagInstanceId" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
