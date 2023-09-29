import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UsersRemoteAuthStringList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UsersRemoteAuthStrings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Remote Auth String" source="remoteAuthString" />
        <TextField label="Users Id" source="usersId" />
      </Datagrid>
    </List>
  );
};
