import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FolderLabelInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Last Label Column" source="lastLabelColumn" />
        <TextField label="Last Label Row" source="lastLabelRow" />
        <TextField label="Last Ran Time" source="lastRanTime" />
        <TextField label="Period Id" source="periodId" />
      </SimpleShowLayout>
    </Show>
  );
};
