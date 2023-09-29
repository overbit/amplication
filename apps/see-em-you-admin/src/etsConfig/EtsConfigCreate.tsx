import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EtsConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Login" source="login" />
        <TextInput label="Password" source="password" />
        <TextInput label="Test Name" source="testName" />
        <TextInput label="Wsdl" source="wsdl" />
      </SimpleForm>
    </Create>
  );
};
