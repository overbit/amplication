import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AssistantshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Granted" source="granted" />
        <TextField label="Id" source="id" />
        <TextField label="Requested" source="requested" />
      </SimpleShowLayout>
    </Show>
  );
};
