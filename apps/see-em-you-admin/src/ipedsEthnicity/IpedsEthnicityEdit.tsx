import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IpedsEthnicityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ipeds Ethnicity" source="ipedsEthnicity" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
        <NumberInput step={1} label="Ethnicity Id" source="ethnicityId" />
      </SimpleForm>
    </Edit>
  );
};
