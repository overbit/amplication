import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const BlacklistReviewerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="App Id" source="appId" />
        <TextField label="Deny" source="deny" />
        <TextField label="Id" source="id" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </SimpleShowLayout>
    </Show>
  );
};
