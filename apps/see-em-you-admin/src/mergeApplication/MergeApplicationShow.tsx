import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MergeApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Base Convert Error" source="baseConvertError" />
        <TextField label="Base Convert Message" source="baseConvertMessage" />
        <TextField label="Base Write Error" source="baseWriteError" />
        <TextField label="Base Write Message" source="baseWriteMessage" />
        <TextField label="Id" source="id" />
        <TextField
          label="Search Text Write Error"
          source="searchTextWriteError"
        />
        <TextField
          label="Search Text Write Message"
          source="searchTextWriteMessage"
        />
      </SimpleShowLayout>
    </Show>
  );
};
