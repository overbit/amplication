import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const StudentDecisionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentDecisions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Program Id" source="programId" />
        <TextField label="Decision" source="decision" />
        <TextField label="Accept Reasons" source="acceptReasons" />
        <TextField label="Other Choice" source="otherChoice" />
        <TextField label="Other Choice Location" source="otherChoiceLocation" />
        <TextField label="Decision Reasons" source="decisionReasons" />
        <BooleanField label="Visit" source="visit" />
        <TextField label="Visit Comments" source="visitComments" />
        <TextField label="Other Schools Applied" source="otherSchoolsApplied" />
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
    </List>
  );
};
