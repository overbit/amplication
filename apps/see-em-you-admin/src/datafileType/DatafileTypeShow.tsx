import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DatafileTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datafile Type" source="datafileType" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
