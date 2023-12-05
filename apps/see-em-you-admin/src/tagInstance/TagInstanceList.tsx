import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TagInstanceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagInstances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="Id" source="id" />
        <TextField label="Owner" source="owner" />
        <TextField label="Period" source="period" />
        <TextField label="Status" source="status" />
        <TextField label="Tag Id" source="tagId" />
      </Datagrid>
    </List>
  );
};
