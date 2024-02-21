import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const PeriodTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Period Type" source="periodType" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
