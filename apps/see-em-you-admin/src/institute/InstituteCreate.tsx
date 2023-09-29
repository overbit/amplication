import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const InstituteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Hide" source="hide" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Create>
  );
};
