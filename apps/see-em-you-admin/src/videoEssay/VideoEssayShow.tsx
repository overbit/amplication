import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const VideoEssayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Url" source="url" />
        <TextField label="Access Code" source="accessCode" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
