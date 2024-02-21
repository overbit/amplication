import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";
import { ProgramModelTitle } from "../programModel/ProgramModelTitle";

export const MlAreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
