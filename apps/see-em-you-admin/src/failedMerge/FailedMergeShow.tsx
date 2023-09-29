import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FailedMergeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="File" source="file" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
