import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TeachingExperienceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Courses Taught" source="coursesTaught" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Order Entered" source="orderEntered" />
        <TextField label="Start Date" source="startDate" />
      </SimpleShowLayout>
    </Show>
  );
};
