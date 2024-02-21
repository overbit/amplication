import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ParentInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="P1 Profession" source="p1Profession" />
        <NumberInput step={1} label="P1 Ed Level" source="p1EdLevel" />
        <TextInput label="P2 Profession" source="p2Profession" />
        <NumberInput step={1} label="P2 Ed Level" source="p2EdLevel" />
        <DateTimeInput label="Modified" source="modified" />
      </SimpleForm>
    </Create>
  );
};
