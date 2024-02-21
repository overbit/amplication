import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseBridgeCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Course Id" source="courseId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
