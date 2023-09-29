import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GpascaleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Formula" source="formula" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Sortorder" source="sortorder" />
      </SimpleShowLayout>
    </Show>
  );
};
