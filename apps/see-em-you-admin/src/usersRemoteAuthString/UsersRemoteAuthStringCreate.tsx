import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UsersRemoteAuthStringCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Remote Auth String" source="remoteAuthString" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Create>
  );
};
