import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuDomainDepartmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuDomainDepartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Drank" source="drank" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
