import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AcoPalTitle } from "../acoPal/AcoPalTitle";
import { ApplicationAdminNoteTitle } from "../applicationAdminNote/ApplicationAdminNoteTitle";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { CashnetPaymentTitle } from "../cashnetPayment/CashnetPaymentTitle";
import { ExperienceTitle } from "../experience/ExperienceTitle";
import { FellowshipTitle } from "../fellowship/FellowshipTitle";
import { GmatscoreTitle } from "../gmatscore/GmatscoreTitle";
import { GresubjectscoreTitle } from "../gresubjectscore/GresubjectscoreTitle";
import { IeltsscoreTitle } from "../ieltsscore/IeltsscoreTitle";
import { LuApplicationAdvisorTitle } from "../luApplicationAdvisor/LuApplicationAdvisorTitle";
import { LuApplicationAppreqTitle } from "../luApplicationAppreq/LuApplicationAppreqTitle";
import { LuApplicationCohortTitle } from "../luApplicationCohort/LuApplicationCohortTitle";
import { LuApplicationGroupTitle } from "../luApplicationGroup/LuApplicationGroupTitle";
import { LuApplicationProgramTitle } from "../luApplicationProgram/LuApplicationProgramTitle";
import { LuApplicationStartSemesterTitle } from "../luApplicationStartSemester/LuApplicationStartSemesterTitle";
import { MhciPrereqTitle } from "../mhciPrereq/MhciPrereqTitle";
import { MhciPrereqsCourseTitle } from "../mhciPrereqsCourse/MhciPrereqsCourseTitle";
import { MlAreaTitle } from "../mlArea/MlAreaTitle";
import { MlSupportingCourseworkTitle } from "../mlSupportingCoursework/MlSupportingCourseworkTitle";
import { MseAqaTitle } from "../mseAqa/MseAqaTitle";
import { MseCodilityTitle } from "../mseCodility/MseCodilityTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { PeriodApplicationTitle } from "../periodApplication/PeriodApplicationTitle";
import { PromotionHistoryTitle } from "../promotionHistory/PromotionHistoryTitle";
import { PublicationTitle } from "../publication/PublicationTitle";
import { RecommendTitle } from "../recommend/RecommendTitle";
import { RegistrationFeePaymentTitle } from "../registrationFeePayment/RegistrationFeePaymentTitle";
import { RegistrationFeeStatusTitle } from "../registrationFeeStatus/RegistrationFeeStatusTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { RissFundingTitle } from "../rissFunding/RissFundingTitle";
import { RissMcnairTitle } from "../rissMcnair/RissMcnairTitle";
import { SpecialConsiderationTitle } from "../specialConsideration/SpecialConsiderationTitle";
import { StudentDecisionTitle } from "../studentDecision/StudentDecisionTitle";
import { StudentDecisionHistoryTitle } from "../studentDecisionHistory/StudentDecisionHistoryTitle";
import { TagMemberTitle } from "../tagMember/TagMemberTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="acoPal.id" reference="AcoPal" label="Aco Pal">
          <SelectInput optionText={AcoPalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="applicationAdminNote"
          reference="ApplicationAdminNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationAdminNoteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Area1" source="area1" />
        <TextInput label="Area2" source="area2" />
        <TextInput label="Area3" source="area3" />
        <ReferenceArrayInput
          source="attendance"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Buckleywaive" source="buckleywaive" />
        <ReferenceArrayInput
          source="cashnetPayment"
          reference="CashnetPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CashnetPaymentTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Cnbc" source="cnbc" />
        <BooleanInput label="Complete" source="complete" />
        <DateTimeInput label="Created Date" source="createdDate" />
        <TextInput label="Cross Dept Progs" source="crossDeptProgs" />
        <TextInput
          label="Cross Dept Progs Other"
          source="crossDeptProgsOther"
        />
        <BooleanInput label="Cups" source="cups" />
        <TextInput label="Cur Enrolled" source="curEnrolled" />
        <ReferenceArrayInput
          source="experience"
          reference="Experience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperienceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fellowships"
          reference="Fellowship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FellowshipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="gmatscore"
          reference="Gmatscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GmatscoreTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="gresubjectscore"
          reference="Gresubjectscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GresubjectscoreTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Hide" source="hide" />
        <TextInput label="Honors" source="honors" />
        <ReferenceArrayInput
          source="ieltsscore"
          reference="Ieltsscore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IeltsscoreTitle} />
        </ReferenceArrayInput>
        <TextInput label="Invitation Email Sent" source="invitationEmailSent" />
        <ReferenceArrayInput
          source="luApplicationAdvisor"
          reference="LuApplicationAdvisor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationAdvisorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="luApplicationAppreqs"
          reference="LuApplicationAppreq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationAppreqTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="luApplicationCohort.id"
          reference="LuApplicationCohort"
          label="Lu Application Cohort"
        >
          <SelectInput optionText={LuApplicationCohortTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="luApplicationGroups"
          reference="LuApplicationGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="luApplicationPrograms"
          reference="LuApplicationProgram"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationProgramTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="luApplicationStartSemester.id"
          reference="LuApplicationStartSemester"
          label="Lu Application Start Semester"
        >
          <SelectInput optionText={LuApplicationStartSemesterTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Masters Review Waiver"
          source="mastersReviewWaiver"
        />
        <ReferenceArrayInput
          source="mhciPrereqs"
          reference="MhciPrereq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mhciPrereqsCourses"
          reference="MhciPrereqsCourse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MhciPrereqsCourseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mlArea"
          reference="MlArea"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MlAreaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mlSupportingCoursework"
          reference="MlSupportingCoursework"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MlSupportingCourseworkTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mseAqa"
          reference="MseAqa"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MseAqaTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="mseCodility.id"
          reference="MseCodility"
          label="Mse Codility"
        >
          <SelectInput optionText={MseCodilityTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Notificationsent" source="notificationsent" />
        <TextInput label="Other Inst" source="otherInst" />
        <BooleanInput label="Paid" source="paid" />
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Paymentamount" source="paymentamount" />
        <DateTimeInput label="Paymentdate" source="paymentdate" />
        <NumberInput step={1} label="Paymenttype" source="paymenttype" />
        <ReferenceArrayInput
          source="periodApplication"
          reference="PeriodApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodApplicationTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Pier" source="pier" />
        <TextInput label="Portfolio Link" source="portfolioLink" />
        <TextInput label="Portfolio Password" source="portfolioPassword" />
        <BooleanInput label="Portfoliosubmitted" source="portfoliosubmitted" />
        <NumberInput
          step={1}
          label="Previous Coursework"
          source="previousCoursework"
        />
        <ReferenceArrayInput
          source="promotionHistory"
          reference="PromotionHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromotionHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="publication"
          reference="Publication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PublicationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="recommend"
          reference="Recommend"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendTitle} />
        </ReferenceArrayInput>
        <TextInput label="Records Permission" source="recordsPermission" />
        <TextInput label="Recruiting Event" source="recruitingEvent" />
        <TextInput label="Referral To Program" source="referralToProgram" />
        <ReferenceArrayInput
          source="registrationFeePayment"
          reference="RegistrationFeePayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegistrationFeePaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="registrationFeeStatus"
          reference="RegistrationFeeStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RegistrationFeeStatusTitle} />
        </ReferenceArrayInput>
        <TextInput label="Rejection Sent" source="rejectionSent" />
        <ReferenceArrayInput
          source="review"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rissFunding"
          reference="RissFunding"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RissFundingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rissMcnair"
          reference="RissMcnair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RissMcnairTitle} />
        </ReferenceArrayInput>
        <TextInput label="Round2" source="round2" />
        <TextInput label="Round3" source="round3" />
        <TextInput label="Sent To Program" source="sentToProgram" />
        <ReferenceArrayInput
          source="specialConsideration"
          reference="SpecialConsideration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SpecialConsiderationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Statementofpurpose" source="statementofpurpose" />
        <BooleanInput label="Student Commit" source="studentCommit" />
        <ReferenceArrayInput
          source="studentDecision"
          reference="StudentDecision"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDecisionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentDecisionHistory"
          reference="StudentDecisionHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDecisionHistoryTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Submitted" source="submitted" />
        <DateTimeInput label="Submitted Date" source="submittedDate" />
        <ReferenceArrayInput
          source="tagMembers"
          reference="TagMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagMemberTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="User Id" source="userId" />
        <TextInput label="Waitlist Sent" source="waitlistSent" />
        <BooleanInput label="Waive" source="waive" />
        <DateTimeInput label="Waivedate" source="waivedate" />
        <NumberInput
          step={1}
          label="Waive Higher Fee"
          source="waiveHigherFee"
        />
        <NumberInput step={1} label="Waive Toefl" source="waiveToefl" />
        <BooleanInput label="Womenfellowship" source="womenfellowship" />
      </SimpleForm>
    </Create>
  );
};
