import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CountryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Iso Code" source="isoCode" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
