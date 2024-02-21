import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ParentInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="P1 Profession" source="p1Profession" />
        <TextField label="P1 Ed Level" source="p1EdLevel" />
        <TextField label="P2 Profession" source="p2Profession" />
        <TextField label="P2 Ed Level" source="p2EdLevel" />
        <DateField source="created" label="Created" />
        <TextField label="Modified" source="modified" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
