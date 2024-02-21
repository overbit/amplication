import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Abbrev" source="abbrev" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Country Id" source="countryId" />
      </SimpleForm>
    </Create>
  );
};
