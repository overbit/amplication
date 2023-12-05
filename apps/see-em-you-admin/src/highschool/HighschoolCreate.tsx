import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HighschoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Graduated" source="graduated" />
        <NumberInput step={1} label="Hs Ceeb" source="hsCeeb" />
        <NumberInput label="Hs Duration" source="hsDuration" />
        <NumberInput step={1} label="Hs Grad Year" source="hsGradYear" />
        <TextInput label="Hs Name" source="hsName" />
        <NumberInput step={1} label="Hs Nces" source="hsNces" />
        <TextInput label="Hs State" source="hsState" />
        <TextInput label="Hs Zip" source="hsZip" />
      </SimpleForm>
    </Create>
  );
};
