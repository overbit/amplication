import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const WaiverOrgShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Active" source="active" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
