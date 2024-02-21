import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupGroupTypeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Program Group Id" source="programGroupId" />
        <TextField label="Program Group Type Id" source="programGroupTypeId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
