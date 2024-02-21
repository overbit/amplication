import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IpedsEthnicityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ipeds Ethnicity" source="ipedsEthnicity" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
        <NumberInput step={1} label="Ethnicity Id" source="ethnicityId" />
      </SimpleForm>
    </Create>
  );
};
