import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ScsUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Andrew Id" source="andrewId" />
        <TextInput label="Cmu Guid" source="cmuGuid" />
        <TextInput label="Cs Id" source="csId" />
        <TextInput label="Ece Id" source="eceId" />
        <TextInput label="Qatar Id" source="qatarId" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Edit>
  );
};
