import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuUsersUsertypesOrigList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuUsersUsertypesOrigs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Domain" source="domain" />
        <TextField label="Id" source="id" />
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
      </Datagrid>
    </List>
  );
};
