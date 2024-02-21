import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Period Id" source="periodId" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Program Group Name" source="programGroupName" />
        <TextField
          label="Program Group Name Short"
          source="programGroupNameShort"
        />
        <TextField
          label="Program Group Description"
          source="programGroupDescription"
        />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
