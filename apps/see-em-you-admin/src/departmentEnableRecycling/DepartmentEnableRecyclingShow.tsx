import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DepartmentEnableRecyclingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Enable Recycling" source="enableRecycling" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
