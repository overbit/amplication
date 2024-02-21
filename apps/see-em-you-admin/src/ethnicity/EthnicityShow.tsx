import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EthnicityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Sortorder" source="sortorder" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
