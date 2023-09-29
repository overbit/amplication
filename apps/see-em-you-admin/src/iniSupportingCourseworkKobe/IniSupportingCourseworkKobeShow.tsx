import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniSupportingCourseworkKobeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Description" source="description" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
