import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProgramGroupTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Program Group Type Description"
          source="programGroupTypeDescription"
        />
        <TextInput
          label="Program Group Type Name"
          source="programGroupTypeName"
        />
      </SimpleForm>
    </Edit>
  );
};
