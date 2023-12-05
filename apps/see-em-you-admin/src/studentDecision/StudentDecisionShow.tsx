import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const StudentDecisionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Other Choice Location" source="otherChoiceLocation" />
        <TextField
          label="Other Schools Accepted"
          source="otherSchoolsAccepted"
        />
        <TextField label="Other Schools Applied" source="otherSchoolsApplied" />
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
      </SimpleShowLayout>
    </Show>
  );
};
