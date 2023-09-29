import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramsUnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Programs Id" source="programsId" />
        <TextField label="Unit Id" source="unitId" />
      </SimpleShowLayout>
    </Show>
  );
};
