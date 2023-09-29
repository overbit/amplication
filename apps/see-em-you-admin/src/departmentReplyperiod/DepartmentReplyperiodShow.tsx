import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DepartmentReplyperiodShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Dept Id" source="deptId" />
        <TextField label="End" source="end" />
        <TextField label="Id" source="id" />
        <TextField label="Start" source="start" />
      </SimpleShowLayout>
    </Show>
  );
};
