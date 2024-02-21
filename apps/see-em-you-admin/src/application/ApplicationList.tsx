import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACOPAL_TITLE_FIELD } from "../acoPal/AcoPalTitle";
import { LUAPPLICATIONCOHORT_TITLE_FIELD } from "../luApplicationCohort/LuApplicationCohortTitle";
import { LUAPPLICATIONSTARTSEMESTER_TITLE_FIELD } from "../luApplicationStartSemester/LuApplicationStartSemesterTitle";
import { MSECODILITY_TITLE_FIELD } from "../mseCodility/MseCodilityTitle";

export const ApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Applications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
