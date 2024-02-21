import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuReviewerGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuReviewerGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="Round" source="round" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
