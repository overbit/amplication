import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AssistantshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Requested" source="requested" />
        <TextField label="Granted" source="granted" />
      </SimpleShowLayout>
    </Show>
  );
};
