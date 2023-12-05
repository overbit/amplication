import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField
          label="Program Group Type Description"
          source="programGroupTypeDescription"
        />
        <TextField
          label="Program Group Type Name"
          source="programGroupTypeName"
        />
      </SimpleShowLayout>
    </Show>
  );
};
