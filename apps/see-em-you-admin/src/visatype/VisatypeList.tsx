import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VisatypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Visatypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Description" source="description" />
        <TextField label="Added For" source="addedFor" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
