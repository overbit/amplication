import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuUsersUsertypesHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuUsersUsertypesHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="deleteTimestamp" label="Delete Timestamp" />
        <TextField label="Delete Users Id" source="deleteUsersId" />
        <TextField label="Id" source="id" />
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
      </Datagrid>
    </List>
  );
};
