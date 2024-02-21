import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PeriodProgramShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Period Id" source="periodId" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
