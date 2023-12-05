import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GpascaleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gpascales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Formula" source="formula" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Sortorder" source="sortorder" />
      </Datagrid>
    </List>
  );
};
