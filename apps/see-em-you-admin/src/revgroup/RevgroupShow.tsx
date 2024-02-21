import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RevgroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Group Type" source="groupType" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
