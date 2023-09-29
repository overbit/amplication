import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ProgramGroupRoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Program Group Id" source="programGroupId" />
        <TextField label="Role Id" source="roleId" />
        <TextField label="Users Id" source="usersId" />
      </SimpleShowLayout>
    </Show>
  );
};
