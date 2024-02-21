import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const MlAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Area" source="area" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="programs.id"
          reference="ProgramModel"
          label="Programs"
        >
          <SelectInput optionText={ProgramModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
