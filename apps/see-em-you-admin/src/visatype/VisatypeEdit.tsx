import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VisatypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Added For" source="addedFor" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Short" source="short" />
      </SimpleForm>
    </Edit>
  );
};
