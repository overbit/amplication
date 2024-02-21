import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ScsUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Users Id" source="usersId" />
        <TextInput label="Cmu Guid" source="cmuGuid" />
        <TextInput label="Cs Id" source="csId" />
        <TextInput label="Andrew Id" source="andrewId" />
        <TextInput label="Ece Id" source="eceId" />
        <TextInput label="Qatar Id" source="qatarId" />
      </SimpleForm>
    </Create>
  );
};
