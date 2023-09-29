import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupProgramShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Program Group Id" source="programGroupId" />
        <TextField label="Unit Id" source="unitId" />
      </SimpleShowLayout>
    </Show>
  );
};
