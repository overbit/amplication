import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DecisionAoiRankMemberList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DecisionAoiRankMembers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Arank" source="arank" />
        <TextField label="Decision" source="decision" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Period Id" source="periodId" />
      </Datagrid>
    </List>
  );
};
