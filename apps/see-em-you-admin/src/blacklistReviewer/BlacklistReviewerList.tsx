import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlacklistReviewerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlacklistReviewers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Id" source="appId" />
        <TextField label="Deny" source="deny" />
        <TextField label="Id" source="id" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </Datagrid>
    </List>
  );
};
