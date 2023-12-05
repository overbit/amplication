import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ExceptionAppEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Active" source="active" />
        <NumberInput step={1} label="App Id" source="appId" />
      </SimpleForm>
    </Edit>
  );
};
