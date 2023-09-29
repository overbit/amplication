import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const HighschoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
