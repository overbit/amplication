import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VisatypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Description" source="description" />
        <TextField label="Added For" source="addedFor" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
