import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UsersRemoteAuthStringEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Users Id" source="usersId" />
        <TextInput label="Remote Auth String" source="remoteAuthString" />
      </SimpleForm>
    </Edit>
  );
};
