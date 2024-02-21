import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Program Type Id" source="programTypeId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
