import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SemPreviousCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Course Name" source="courseName" />
        <TextField label="Course Year" source="courseYear" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
