import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExceptionAppList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExceptionApps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Active" source="active" />
        <TextField label="App Id" source="appId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
