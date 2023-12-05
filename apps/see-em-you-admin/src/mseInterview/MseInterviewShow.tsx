import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MseInterviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Interview Comments" source="interviewComments" />
        <TextField label="Interview Date" source="interviewDate" />
        <TextField label="Interview Type" source="interviewType" />
        <TextField label="Interview Type Other" source="interviewTypeOther" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </SimpleShowLayout>
    </Show>
  );
};
