import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProgramGroupTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="Program Group Type Name"
          source="programGroupTypeName"
        />
        <TextInput
          label="Program Group Type Description"
          source="programGroupTypeDescription"
        />
      </SimpleForm>
    </Create>
  );
};
