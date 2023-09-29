import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UnitRoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Role Id" source="roleId" />
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Users Id" source="usersId" />
      </SimpleShowLayout>
    </Show>
  );
};
