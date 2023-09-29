import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IpedsRaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ipeds Race" source="ipedsRace" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Create>
  );
};
