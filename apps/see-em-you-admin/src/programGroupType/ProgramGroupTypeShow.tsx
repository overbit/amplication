import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Program Group Type Name"
          source="programGroupTypeName"
        />
        <TextField
          label="Program Group Type Description"
          source="programGroupTypeDescription"
        />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
