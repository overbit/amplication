import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlateProgramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First" source="first" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Mse Program1" source="mseProgram1" />
        <TextInput label="Mse Program2" source="mseProgram2" />
        <TextInput label="Mse Program3" source="mseProgram3" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Edit>
  );
};
