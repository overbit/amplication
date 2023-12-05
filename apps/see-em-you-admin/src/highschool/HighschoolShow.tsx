import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HighschoolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <DateField source="created" label="Created" />
        <TextField label="Graduated" source="graduated" />
        <TextField label="Hs Ceeb" source="hsCeeb" />
        <TextField label="Hs Duration" source="hsDuration" />
        <TextField label="Hs Grad Year" source="hsGradYear" />
        <TextField label="Hs Name" source="hsName" />
        <TextField label="Hs Nces" source="hsNces" />
        <TextField label="Hs State" source="hsState" />
        <TextField label="Hs Zip" source="hsZip" />
        <TextField label="Id" source="id" />
        <DateField source="modified" label="Modified" />
      </SimpleShowLayout>
    </Show>
  );
};
