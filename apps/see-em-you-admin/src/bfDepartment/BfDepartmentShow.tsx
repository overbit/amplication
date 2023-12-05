import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const BfDepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bf Department" source="bfDepartment" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
