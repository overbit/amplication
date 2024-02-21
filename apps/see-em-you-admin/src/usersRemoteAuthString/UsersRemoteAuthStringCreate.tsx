import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UsersRemoteAuthStringCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Users Id" source="usersId" />
        <TextInput label="Remote Auth String" source="remoteAuthString" />
      </SimpleForm>
    </Create>
  );
};
