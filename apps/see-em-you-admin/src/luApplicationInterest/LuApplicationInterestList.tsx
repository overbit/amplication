import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuApplicationInterestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationInterests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Program Id" source="appProgramId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Id" source="id" />
        <TextField label="Interest Id" source="interestId" />
      </Datagrid>
    </List>
  );
};
