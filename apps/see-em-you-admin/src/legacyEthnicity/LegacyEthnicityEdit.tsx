import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LegacyEthnicityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Ethnicity Id" source="ethnicityId" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Sortorder" source="sortorder" />
      </SimpleForm>
    </Edit>
  );
};
