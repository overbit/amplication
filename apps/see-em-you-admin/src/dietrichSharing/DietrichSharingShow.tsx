import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DietrichSharingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Sds" source="sds" />
        <TextField label="Tepper" source="tepper" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
