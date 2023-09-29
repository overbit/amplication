import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EtsConfigShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Login" source="login" />
        <TextField label="Password" source="password" />
        <TextField label="Test Name" source="testName" />
        <TextField label="Wsdl" source="wsdl" />
      </SimpleShowLayout>
    </Show>
  );
};
