import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuReviewInterestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuReviewInterests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Review Id" source="reviewId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Code" source="code" />
      </Datagrid>
    </List>
  );
};
