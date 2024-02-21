import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VisatypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Short" source="short" />
        <TextInput label="Description" source="description" />
        <TextInput label="Added For" source="addedFor" />
      </SimpleForm>
    </Edit>
  );
};
