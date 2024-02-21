import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const StudentDecisionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id" source="programId" />
        <SelectInput
          source="decision"
          label="Decision"
          choices={[
            { label: "accept", value: "accept" },
            { label: "decline", value: "decline" },
            { label: "defer", value: "defer" },
            { label: "matriculate", value: "matriculate" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Accept Reasons" source="acceptReasons" />
        <TextInput label="Other Choice" source="otherChoice" />
        <TextInput label="Other Choice Location" source="otherChoiceLocation" />
        <TextInput label="Decision Reasons" source="decisionReasons" />
        <BooleanInput label="Visit" source="visit" />
        <TextInput label="Visit Comments" source="visitComments" />
        <TextInput label="Other Schools Applied" source="otherSchoolsApplied" />
        <TextInput
          label="Other Schools Accepted"
          source="otherSchoolsAccepted"
        />
        <BooleanInput label="Submitted" source="submitted" />
        <BooleanInput label="Visit Helpful" source="visitHelpful" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <TextInput label="Marital Other" source="maritalOther" />
        <BooleanInput label="Affiliated Cmu" source="affiliatedCmu" />
        <TextInput label="Prog Length" source="progLength" />
        <TextInput label="Attend Acc" source="attendAcc" />
        <TextInput label="Legal Name" source="legalName" />
        <TextInput label="Pref Name" source="prefName" />
        <TextInput label="Pref Email" source="prefEmail" />
        <DateTimeInput label="Dob" source="dob" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Gender Other" source="genderOther" />
        <TextInput label="Tel Mobile" source="telMobile" />
        <TextInput label="Street P1" source="streetP1" />
        <TextInput label="Street P2" source="streetP2" />
        <TextInput label="Street P3" source="streetP3" />
        <TextInput label="Street P4" source="streetP4" />
        <TextInput label="City P" source="cityP" />
        <TextInput label="State P" source="stateP" />
        <TextInput label="Postal P" source="postalP" />
        <TextInput label="Country P" source="countryP" />
        <TextInput label="Cit Country" source="citCountry" />
        <NumberInput step={1} label="Hispanic" source="hispanic" />
        <NumberInput step={1} label="Nat Am" source="natAm" />
        <NumberInput step={1} label="Black" source="black" />
        <NumberInput step={1} label="Asian" source="asian" />
        <NumberInput step={1} label="Hpi" source="hpi" />
        <NumberInput step={1} label="Cau" source="cau" />
        <TextInput label="Done Diff" source="doneDiff" />
        <NumberInput step={1} label="Admin" source="admin" />
        <NumberInput step={1} label="Opt Comm" source="optComm" />
        <TextInput label="Errors" source="errors" />
        <TextInput label="Deferral Reasons" source="deferralReasons" />
        <TextInput label="Deferral Semester" source="deferralSemester" />
        <TextInput label="Deferral Year" source="deferralYear" />
        <TextInput label="Pronoun" source="pronoun" />
        <TextInput label="Pronoun Other" source="pronounOther" />
        <TextInput label="Affiliated Cmutxt" source="affiliatedCmutxt" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
