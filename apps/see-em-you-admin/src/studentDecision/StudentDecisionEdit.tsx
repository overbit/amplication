import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const StudentDecisionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Accept Reasons" source="acceptReasons" />
        <NumberInput step={1} label="Admin" source="admin" />
        <BooleanInput label="Affiliated Cmu" source="affiliatedCmu" />
        <TextInput label="Affiliated Cmutxt" source="affiliatedCmutxt" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Asian" source="asian" />
        <TextInput label="Attend Acc" source="attendAcc" />
        <NumberInput step={1} label="Black" source="black" />
        <NumberInput step={1} label="Cau" source="cau" />
        <TextInput label="Cit Country" source="citCountry" />
        <TextInput label="City P" source="cityP" />
        <TextInput label="Country P" source="countryP" />
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
        <TextInput label="Decision Reasons" source="decisionReasons" />
        <TextInput label="Deferral Reasons" source="deferralReasons" />
        <TextInput label="Deferral Semester" source="deferralSemester" />
        <TextInput label="Deferral Year" source="deferralYear" />
        <DateTimeInput label="Dob" source="dob" />
        <TextInput label="Done Diff" source="doneDiff" />
        <TextInput label="Errors" source="errors" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Gender Other" source="genderOther" />
        <NumberInput step={1} label="Hispanic" source="hispanic" />
        <NumberInput step={1} label="Hpi" source="hpi" />
        <TextInput label="Legal Name" source="legalName" />
        <TextInput label="Marital Other" source="maritalOther" />
        <TextInput label="Marital Status" source="maritalStatus" />
        <NumberInput step={1} label="Nat Am" source="natAm" />
        <NumberInput step={1} label="Opt Comm" source="optComm" />
        <TextInput label="Other Choice" source="otherChoice" />
        <TextInput label="Other Choice Location" source="otherChoiceLocation" />
        <TextInput
          label="Other Schools Accepted"
          source="otherSchoolsAccepted"
        />
        <TextInput label="Other Schools Applied" source="otherSchoolsApplied" />
        <TextInput label="Postal P" source="postalP" />
        <TextInput label="Pref Email" source="prefEmail" />
        <TextInput label="Pref Name" source="prefName" />
        <TextInput label="Prog Length" source="progLength" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <TextInput label="Pronoun" source="pronoun" />
        <TextInput label="Pronoun Other" source="pronounOther" />
        <TextInput label="State P" source="stateP" />
        <TextInput label="Street P1" source="streetP1" />
        <TextInput label="Street P2" source="streetP2" />
        <TextInput label="Street P3" source="streetP3" />
        <TextInput label="Street P4" source="streetP4" />
        <BooleanInput label="Submitted" source="submitted" />
        <TextInput label="Tel Mobile" source="telMobile" />
        <BooleanInput label="Visit" source="visit" />
        <TextInput label="Visit Comments" source="visitComments" />
        <BooleanInput label="Visit Helpful" source="visitHelpful" />
      </SimpleForm>
    </Edit>
  );
};
