import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UnitPeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Period Id" source="periodId" />
      </SimpleShowLayout>
    </Show>
  );
};
