import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DecisionAoiRankList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DecisionAoiRanks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Decision" source="decision" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <TextField label="Ranking" source="ranking" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
