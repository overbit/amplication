import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RequestsAccessList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RequestsAccesses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="User" source="user" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
