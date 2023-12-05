import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GpascaleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Formula" source="formula" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Sortorder" source="sortorder" />
      </SimpleForm>
    </Create>
  );
};
