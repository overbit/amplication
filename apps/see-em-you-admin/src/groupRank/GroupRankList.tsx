import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GroupRankList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GroupRanks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comment" source="comment" />
        <TextField label="Group Id" source="groupId" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Ranking" source="ranking" />
        <TextField label="Round" source="round" />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
