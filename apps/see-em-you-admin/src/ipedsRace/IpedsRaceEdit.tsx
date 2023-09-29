import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const IpedsRaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ipeds Race" source="ipedsRace" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Edit>
  );
};
