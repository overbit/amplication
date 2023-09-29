import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationreqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Applicationreqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Linkname" source="linkname" />
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Sortorder" source="sortorder" />
      </Datagrid>
    </List>
  );
};
