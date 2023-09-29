import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepartmentReplyperiodList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DepartmentReplyperiods"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Dept Id" source="deptId" />
        <TextField label="End" source="end" />
        <TextField label="Id" source="id" />
        <TextField label="Start" source="start" />
      </Datagrid>
    </List>
  );
};
