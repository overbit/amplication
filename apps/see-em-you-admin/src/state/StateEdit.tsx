import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Abbrev" source="abbrev" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Country Id" source="countryId" />
      </SimpleForm>
    </Edit>
  );
};
