import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ExceptionAppShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Active" source="active" />
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
