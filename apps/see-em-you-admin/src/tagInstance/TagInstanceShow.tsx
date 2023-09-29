import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const TagInstanceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="Id" source="id" />
        <TextField label="Owner" source="owner" />
        <TextField label="Period" source="period" />
        <TextField label="Status" source="status" />
        <TextField label="Tag Id" source="tagId" />
      </SimpleShowLayout>
    </Show>
  );
};
