import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JiravoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jiravotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="created" label="Created" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Jira Name" source="jiraName" />
        <TextField label="User" source="user" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
