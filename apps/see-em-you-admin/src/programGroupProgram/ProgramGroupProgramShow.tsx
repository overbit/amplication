import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupProgramShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Program Group Id" source="programGroupId" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
