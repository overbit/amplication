import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LegacyEthnicityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Ethnicity Id" source="ethnicityId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Sortorder" source="sortorder" />
      </SimpleShowLayout>
    </Show>
  );
};
