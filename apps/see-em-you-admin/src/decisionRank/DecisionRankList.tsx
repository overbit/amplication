import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DecisionRankList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DecisionRanks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Decision" source="decision" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Ranking" source="ranking" />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
