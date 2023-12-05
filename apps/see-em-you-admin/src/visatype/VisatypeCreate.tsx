import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VisatypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Added For" source="addedFor" />
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="Short" source="short" />
      </SimpleForm>
    </Create>
  );
};
