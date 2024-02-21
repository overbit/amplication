import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GroupRankCommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GroupRankComments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Group Id" source="groupId" />
        <TextField label="Round" source="round" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Comment" source="comment" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
