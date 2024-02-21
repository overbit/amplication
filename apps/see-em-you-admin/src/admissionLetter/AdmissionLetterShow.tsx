import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AdmissionLetterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Sections" source="sections" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
