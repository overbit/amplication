import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewIniAdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Round" source="round" />
        <TextField label="Comments" source="comments" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
