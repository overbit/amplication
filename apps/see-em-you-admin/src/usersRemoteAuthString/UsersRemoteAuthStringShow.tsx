import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UsersRemoteAuthStringShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Users Id" source="usersId" />
        <TextField label="Remote Auth String" source="remoteAuthString" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
