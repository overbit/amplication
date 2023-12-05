import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RequestsAccessCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
