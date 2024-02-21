import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProgramGroupRoleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgramGroupRoles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Program Group Id" source="programGroupId" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Role Id" source="roleId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
