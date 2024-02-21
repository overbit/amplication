import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ScsUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Users Id" source="usersId" />
        <TextInput label="Cmu Guid" source="cmuGuid" />
        <TextInput label="Cs Id" source="csId" />
        <TextInput label="Andrew Id" source="andrewId" />
        <TextInput label="Ece Id" source="eceId" />
        <TextInput label="Qatar Id" source="qatarId" />
      </SimpleForm>
    </Edit>
  );
};
