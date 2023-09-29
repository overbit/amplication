import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PeriodTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Period Type" source="periodType" />
      </SimpleForm>
    </Create>
  );
};
