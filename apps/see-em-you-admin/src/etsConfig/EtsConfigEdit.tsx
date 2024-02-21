import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EtsConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Test Name" source="testName" />
        <TextInput label="Wsdl" source="wsdl" />
        <TextInput label="Login" source="login" />
        <TextInput label="Password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
