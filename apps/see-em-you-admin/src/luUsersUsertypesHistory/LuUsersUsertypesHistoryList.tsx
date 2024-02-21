import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
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
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Delete Users Id" source="deleteUsersId" />
        <DateField source="deleteTimestamp" label="Delete Timestamp" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
