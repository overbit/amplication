import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VeteranInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Branch" source="branch" />
        <TextField label="Discharge" source="discharge" />
        <TextField label="Enddate" source="enddate" />
        <TextField label="Id" source="id" />
        <TextField label="Startdate" source="startdate" />
        <TextField label="Status" source="status" />
        <TextField label="Status Enroll" source="statusEnroll" />
        <TextField label="User Id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
