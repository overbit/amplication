import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ExceptionAppCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Active" source="active" />
        <NumberInput step={1} label="App Id" source="appId" />
      </SimpleForm>
    </Create>
  );
};
