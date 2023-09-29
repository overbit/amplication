import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Parent" source="parent" />
        <TextField label="Sticky" source="sticky" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
