import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SelfGenderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SelfGenders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Gender Index" source="genderIndex" />
        <TextField label="Id" source="id" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
