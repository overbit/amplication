import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DisabilityTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
