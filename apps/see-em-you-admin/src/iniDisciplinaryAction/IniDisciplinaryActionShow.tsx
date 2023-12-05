import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniDisciplinaryActionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Retraction" source="retraction" />
        <TextField
          label="Retraction Description"
          source="retractionDescription"
        />
        <TextField label="Sanction" source="sanction" />
        <TextField label="Sanction Description" source="sanctionDescription" />
      </SimpleShowLayout>
    </Show>
  );
};
