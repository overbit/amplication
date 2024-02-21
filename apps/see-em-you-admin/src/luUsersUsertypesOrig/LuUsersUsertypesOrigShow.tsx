import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuUsersUsertypesOrigShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Domain" source="domain" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
