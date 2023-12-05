import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReclogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ip" source="ip" />
        <TextInput label="Message" source="message" />
      </SimpleForm>
    </Create>
  );
};
