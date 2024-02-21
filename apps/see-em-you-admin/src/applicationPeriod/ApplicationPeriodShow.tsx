import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplicationPeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
