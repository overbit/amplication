import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GpascaleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Formula" source="formula" />
        <TextField label="Sortorder" source="sortorder" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
