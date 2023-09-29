import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const StateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Abbrev" source="abbrev" />
        <TextField label="Country Id" source="countryId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
