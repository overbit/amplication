import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const IpedsEthnicityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Ethnicity Id" source="ethnicityId" />
        <TextInput label="Ipeds Ethnicity" source="ipedsEthnicity" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Edit>
  );
};
