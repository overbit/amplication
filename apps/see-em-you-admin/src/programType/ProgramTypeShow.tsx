import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Program Type" source="programType" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
