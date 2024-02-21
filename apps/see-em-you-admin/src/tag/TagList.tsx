import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TagList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Name" source="name" />
        <TextField label="Sticky" source="sticky" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Category" source="category" />
        <TextField label="Parent" source="parent" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
