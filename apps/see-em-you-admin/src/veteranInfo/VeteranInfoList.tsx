import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VeteranInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VeteranInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Branch" source="branch" />
        <TextField label="Discharge" source="discharge" />
        <TextField label="Enddate" source="enddate" />
        <TextField label="Id" source="id" />
        <TextField label="Startdate" source="startdate" />
        <TextField label="Status" source="status" />
        <TextField label="Status Enroll" source="statusEnroll" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
