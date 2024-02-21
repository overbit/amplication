import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const CommitteeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User Id" source="userId" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
