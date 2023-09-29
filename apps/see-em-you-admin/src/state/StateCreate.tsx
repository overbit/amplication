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
        <NumberInput step={1} label="Country Id" source="countryId" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
