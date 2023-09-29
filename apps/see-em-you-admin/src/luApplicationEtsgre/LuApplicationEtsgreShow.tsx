import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuApplicationEtsgreShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Gre Id" source="greId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
