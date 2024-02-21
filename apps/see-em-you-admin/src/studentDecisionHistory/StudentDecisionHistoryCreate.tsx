import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const StudentDecisionHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id" source="programId" />
        <TextInput label="Decision" source="decision" />
        <TextInput label="Deferral Semester" source="deferralSemester" />
        <TextInput label="Deferral Year" source="deferralYear" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
