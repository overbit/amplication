import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IpedsRaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Ipeds Race" source="ipedsRace" />
        <TextField label="Sort Order" source="sortOrder" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
