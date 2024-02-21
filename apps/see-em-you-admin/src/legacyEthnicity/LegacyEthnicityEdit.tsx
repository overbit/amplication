import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LegacyEthnicityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Sortorder" source="sortorder" />
        <NumberInput step={1} label="Ethnicity Id" source="ethnicityId" />
      </SimpleForm>
    </Edit>
  );
};
