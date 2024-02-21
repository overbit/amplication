import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const LuApplicationAdvisorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Advisor User Id" source="advisorUserId" />
        <NumberInput step={1} label="Advisor Type" source="advisorType" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Choice" source="choice" />
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
