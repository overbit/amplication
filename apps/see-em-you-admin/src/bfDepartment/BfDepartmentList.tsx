import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BfDepartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BfDepartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bf Department" source="bfDepartment" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
