import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PositiveFactorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <TextField label="Positive Factor" source="positiveFactor" />
        <TextField label="Positive Factor Id" source="positiveFactorId" />
      </SimpleShowLayout>
    </Show>
  );
};
