import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField
          label="Program Group Description"
          source="programGroupDescription"
        />
        <TextField label="Program Group Name" source="programGroupName" />
        <TextField
          label="Program Group Name Short"
          source="programGroupNameShort"
        />
        <TextField label="Unit Id" source="unitId" />
      </SimpleShowLayout>
    </Show>
  );
};
