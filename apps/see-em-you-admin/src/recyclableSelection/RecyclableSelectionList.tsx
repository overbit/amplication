import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RecyclableSelectionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecyclableSelections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Users Id" source="usersId" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
