import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DepartmentUnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
